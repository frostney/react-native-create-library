const emoji = require('node-emoji');

const createLibrary = require('./lib');

module.exports = {
  name: 'create-library',
  description: 'creates a React Native library for different platforms',
  usage: '[options] <name>',
  func: (args, config, options) => {
    const name = args[0];
    const prefix = options.prefix;
    const modulePrefix = options.modulePrefix;
    const packageIdentifier = options.packageIdentifier;
    const namespace = options.namespace;
    const platforms = (options.platforms) ? options.platforms.split(',') : options.platforms;
    const overridePrefix = options.overridePrefix;

    const beforeCreation = Date.now();
    createLibrary({
      name,
      prefix,
      modulePrefix,
      packageIdentifier,
      platforms,
      namespace,
      overridePrefix,
    }).then(() => {
      console.log(`
${emoji.get('books')}  Created library ${name} in \`./${name}\`.
${emoji.get('clock9')}  It took ${Date.now() - beforeCreation}ms.
${emoji.get('arrow_right')}  To get started type \`cd ./${name}\``);
    }).catch((err) => {
      console.error(`Error while creating library ${name}`);

      if (err.stack) {
        console.error(err.stack);
      }
    });
  },
  options: [{
    command: '--prefix [prefix]',
    description: 'The prefix for the library (Default: `RN`)',
    default: 'RN',
  }, {
    command: '--override-prefix',
    description: 'Overrides the prefix check and allows the name to begin with uppercase characters',
  }, {
    command: '--module-prefix [modulePrefix]',
    description: 'The module prefix for the library (Default: `react-native`)',
    default: 'react-native',
  }, {
    command: '--package-identifier [packageIdentifier]',
    description: '(Android only!) The package name for the Android module (Default: `com.reactlibrary`)',
    default: 'com.reactlibrary',
  }, {
    command: '--namespace [namespace]',
    description: '(Windows only!) The namespace for the Windows module\n' +
    ' (Default: The name as PascalCase)'
  }, {
    command: '--platforms <platforms>',
    description: 'Platforms the library will be created for. (comma separated; default: `ios,android,windows`)',
    default: 'ios,android,windows',
  }]
};
