#!/usr/bin/env node

const program = require('commander');
const createLibrary = require('./lib');
const pkg = require('./package.json');

program.version(pkg.version)
  .usage('[options] <file ...>')
  .option('-p, --prefix <prefix>',
    'The prefix for the library (Default: RN)')
  .option('--module-prefix <modulePrefix>',
    'Module name for UMD build')
  .option('--package-identifier <packageIdentifier>',
    'Build formats (comma separated; default: es6,umd,cjs)')
  .option('--namespace <namespace>',
    'Postfix names (comma separated; default: es2015:.es6,umd:.umd,cjs:,iife:.iife)')
  .parse(process.argv);

const name = program.args[0];
const prefix = program.prefix;
const modulePrefix = program.modulePrefix;
const packageIdentifier = program.packageIdentifier;
const namespace = program.namespace;

const beforeCreation = Date.now();
createLibrary({
  name,
  prefix,
  modulePrefix,
  packageIdentifier,
  namespace,
}).then(() => {
  console.log(`Created library ${name}. It took ${Date.now() - beforeCreation}ms.`);
}).catch(err => {
  console.error(`Error while creating library ${name}`);

  if (err.stack) {
    console.error(err.stack);
  }
});
