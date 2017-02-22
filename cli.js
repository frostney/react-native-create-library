#!/usr/bin/env node

const program = require('commander');
const updateNotifier = require('update-notifier');

const createLibrary = require('./lib');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

program.version(pkg.version)
  .usage('[options] <name>')
  .option('-p, --prefix <prefix>',
    'The prefix for the library (Default: `RN`)')
  .option('--override-prefix',
    'Overrides the prefix check and allows the name to begin with uppercase characters')
  .option('--module-prefix <modulePrefix>',
    'The module prefix for the library (Default: `react-native`)')
  .option('--package-identifier <packageIdentifier>',
    '(Android only!) The package name for the Android module (Default: `com.reactlibrary`)')
  .option('--namespace <namespace>',
    '(Windows only!) The namespace for the Windows module\n' +
    ' (Default: The package identifier as PascalCase, which is `Com.Reactlibrary`)')
  .option('--platforms <platforms>',
    'Platforms the library will be created for. (comma separated; default: `ios,android,windows`)')
  .parse(process.argv);

const name = program.args[0];
const prefix = program.prefix;
const modulePrefix = program.modulePrefix;
const packageIdentifier = program.packageIdentifier;
const namespace = program.namespace;
const platforms = (program.platforms) ? program.platforms.split(',') : program.platforms;
const overridePrefix = program.overridePrefix;

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
Created library ${name}. It took ${Date.now() - beforeCreation}ms.`);
}).catch((err) => {
  console.error(`Error while creating library ${name}`);

  if (err.stack) {
    console.error(err.stack);
  }
});
