const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const templates = require('./templates');

const DEFAULT_PLATFORMS = ['android', 'ios', 'windows'];

const hasPrefix = name =>
  name[0].toUpperCase() === name[0] && name[1].toUpperCase() === name[1];

module.exports = ({
  name = 'Library',
  prefix = 'RN',
  packageIdentifier = 'com.reactlibrary',
  platforms = DEFAULT_PLATFORMS,
}) => {
  if (hasPrefix(name)) {
    throw new Error('Please don\'t include the prefix in the name');
  }

  if (prefix === 'RTC') {
    throw new Error(`The "RTC" name prefix is reserved for core React modules.
      Please use a different prefix.`);
  }

  if (prefix === 'RN') {
    console.warn('While `RN` is the default prefix, it is recommended to customize the prefix.');
  }

  templates.filter(template => {
    if (template.platform) {
      return (platforms.indexOf(template.platform) >= 0);
    }

    return true;
  }).forEach(template => {
    if (!template.name) {
      return;
    }

    const args = {
      name: `${prefix}${name[0].toUpperCase() + name.slice(1)}`,
      moduleName: `react-native-${name.toLowerCase()}`,
      packageIdentifier,
    };

    const filename = template.name(args);
    const baseDir = filename.split(path.basename(filename))[0];

    if (baseDir) {
      mkdirp.sync(baseDir);
    }

    fs.writeFileSync(
      filename,
      template.content(args)
    );
  });
};
