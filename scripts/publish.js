const fs = require('fs');
const shell = require('shelljs');

const content = require('../package.json');

const DEFAULT_NAME = 'react-native-create-library';
const ALTERNATE_NAME = 'rnpm-plugin-create-library';

content.name = ALTERNATE_NAME;

fs.writeFileSync('../package.json', JSON.stringify(content, null, 2));

shell.exec('npm publish');

content.name = DEFAULT_NAME;

fs.writeFileSync('../package.json', JSON.stringify(content, null, 2));

shell.exec('npm publish');
