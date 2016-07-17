const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const pascalCase = require('pascal-case');
const paramCase = require('param-case');

const templates = require('./templates');

const DEFAULT_NAME = 'Library';
const DEFAULT_PREFIX = 'RN';
const DEFAULT_MODULE_PREFIX = 'react-native';
const DEFAULT_PACKAGE_IDENTIFIER = 'com.reactlibrary';
const DEFAULT_PLATFORMS = ['android', 'ios', 'windows'];

const isUpperCase = (str, index) => str[index].toUpperCase() === str[index];

const hasPrefix = name => isUpperCase(name, 0) && isUpperCase(name, 1);

const createFolder = folder =>
  new Promise((resolve, reject) => {
    if (!folder) {
      resolve();
      return;
    }

    mkdirp(folder, err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });

module.exports = ({
  namespace,
  name = DEFAULT_NAME,
  prefix = DEFAULT_PREFIX,
  modulePrefix = DEFAULT_MODULE_PREFIX,
  packageIdentifier = DEFAULT_PACKAGE_IDENTIFIER,
  platforms = DEFAULT_PLATFORMS,
}) => {
  if (hasPrefix(name)) {
    throw new Error('Please don\'t include the prefix in the name');
  }

  if (prefix === 'RTC') {
    throw new Error(`The \`RTC\` name prefix is reserved for core React modules.
      Please use a different prefix.`);
  }

  if (prefix === 'RN') {
    console.warn(`While \`RN\` is the default prefix,
      it is recommended to customize the prefix.`);
  }

  return Promise.all(templates.filter(template => {
    if (template.platform) {
      return (platforms.indexOf(template.platform) >= 0);
    }

    return true;
  }).map(template => {
    if (!template.name) {
      return Promise.resolve();
    }

    const args = {
      name: `${prefix}${pascalCase(name)}`,
      moduleName: `${modulePrefix}-${paramCase(name)}`,
      packageIdentifier,
      namespace: namespace || pascalCase(packageIdentifier).split(/(?=[A-Z])/).join('.'),
      platforms,
    };

    const filename = template.name(args);
    const baseDir = filename.split(path.basename(filename))[0];

    return createFolder(baseDir).then(() =>
      new Promise((resolve, reject) => {
        fs.writeFile(
          filename,
          template.content(args),
          err => {
            if (err) {
              return reject(err);
            }

            return resolve();
          }
        );
      })
    );
  }));
};
