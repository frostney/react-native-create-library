#!/usr/bin/env node

const program = require('commander');
const updateNotifier = require('update-notifier');

const command = require('./command');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

program
  .usage(command.usage)
  .description(command.description)
  .action(function runAction() {
    command.func(arguments, {}, this.opts());
  });

(command.options || [])
  .forEach(opt =>
    program.option(
    opt.command,
    opt.description,
    opt.parse || (value => value),
    opt.default
  ));

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
