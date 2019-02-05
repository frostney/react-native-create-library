const path = require('path');

const pascalCase = require('pascal-case');
const paramCase = require('param-case');

const templates = require('./templates');
const { hasPrefix, createFile, createFolder, npmAddScriptSync, exec } = require('./utils');
const { execSync } = require('child_process');

const DEFAULT_NAME = 'Library';
const DEFAULT_PREFIX = 'RN';
const DEFAULT_MODULE_PREFIX = 'react-native';
const DEFAULT_PACKAGE_IDENTIFIER = 'com.reactlibrary';
const DEFAULT_PLATFORMS = ['android', 'ios', 'windows'];
const DEFAULT_OVERRIDE_PREFIX = false;
const DEFAULT_GITHUB_ACCOUNT = 'github_account';
const DEFAULT_AUTHOR_NAME = 'Your Name';
const DEFAULT_AUTHOR_EMAIL = 'yourname@email.com';
const DEFAULT_LICENSE = 'Apache-2.0';
const DEFAULT_GENERATE_EXAMPLE = false;

const renderTemplate = (name, template, templateArgs) => {
  const filename = path.join(name, template.name(templateArgs));
  const baseDir = filename.split(path.basename(filename))[0];

  return createFolder(baseDir).then(() =>
    createFile(filename, template.content(templateArgs))
  );
}

module.exports = ({
  namespace,
  name = DEFAULT_NAME,
  prefix = DEFAULT_PREFIX,
  modulePrefix = DEFAULT_MODULE_PREFIX,
  packageIdentifier = DEFAULT_PACKAGE_IDENTIFIER,
  platforms = DEFAULT_PLATFORMS,
  overridePrefix = DEFAULT_OVERRIDE_PREFIX,
  githubAccount = DEFAULT_GITHUB_ACCOUNT,
  authorName = DEFAULT_AUTHOR_NAME,
  authorEmail = DEFAULT_AUTHOR_EMAIL,
  license = DEFAULT_LICENSE,
  generateExample = DEFAULT_GENERATE_EXAMPLE,
}) => {
  if (!overridePrefix) {
    if (hasPrefix(name)) {
      throw new Error('Please don\'t include the prefix in the name');
    }

    if (prefix === 'RCT') {
      throw new Error(`The \`RCT\` name prefix is reserved for core React modules.
    Please use a different prefix.`);
    }
  }

  if (platforms.length === 0) {
    throw new Error('Please specify at least one platform to generate the library.');
  }

  if (prefix === DEFAULT_PREFIX) {
    console.warn(`While \`${DEFAULT_PREFIX}\` is the default prefix,
      it is recommended to customize the prefix.`);
  }

  if (packageIdentifier === DEFAULT_PACKAGE_IDENTIFIER) {
    console.warn(`While \`{DEFAULT_PACKAGE_IDENTIFIER}\` is the default package
      identifier, it is recommended to customize the package identifier.`);
  }

  const moduleName = `${modulePrefix}-${paramCase(name)}`;
  const rootFolderName = moduleName;
  return createFolder(rootFolderName)
    .then(() => {
      return Promise.all(templates.filter((template) => {
        if (template.platform) {
          return (platforms.indexOf(template.platform) >= 0);
        }

        return true;
      }).map((template) => {
        if (!template.name) {
          return Promise.resolve();
        }
        const templateArgs = {
          name: `${prefix}${pascalCase(name)}`,
          moduleName,
          packageIdentifier,
          namespace: namespace || pascalCase(name).split(/(?=[A-Z])/).join('.'),
          platforms,
          githubAccount,
          authorName,
          authorEmail,
          license,
          generateExample,
        };

        return renderTemplate(rootFolderName, template, templateArgs);
      }));
    })
    .then(() => {
      // Generate the example if necessary
      if (!generateExample) {
        return Promise.resolve();
      }

      const initExampleOptions = { cwd: `./${rootFolderName}`, stdio: 'inherit' };
      return exec('react-native init example', initExampleOptions)
        .then(() => {
          // Execute the example template
          const exampleTemplates = require('./templates/example');
          return Promise.all(
            exampleTemplates.map((template) => {
              return renderTemplate(rootFolderName, template);
            })
          );
        })
        .then(() => {
          // Adds and link the new library
          return new Promise((resolve, reject) => {
            // Add postinstall script to example package.json
            const pathExampleApp = `./${rootFolderName}/example`;
            npmAddScriptSync(`${pathExampleApp}/package.json`, {
              key: 'postinstall',
              value: `node ../scripts/examples_postinstall.js`
            });

            // Add and link the new library
            const addLinkLibraryOptions = { cwd: pathExampleApp, stdio: 'inherit' };
            try {
              execSync('yarn add file:../', addLinkLibraryOptions);
            } catch (e) {
              execSync('npm install ../', addLinkLibraryOptions);
              execSync('npm install', addLinkLibraryOptions);
            }
            execSync('react-native link', addLinkLibraryOptions);

            return resolve();
          });
        });
    });
};
