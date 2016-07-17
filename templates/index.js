const android = require('./android')('android');
const ios = require('./ios')('ios');
const windows = require('./windows')('windows');

const general = [{
  name: () => 'README.md',
  content: () => `
    Hello there my old friend
  `,
}];

const updatePlatformInFile = platform => file => {
  const f = file;

  f.platform = platform;

  return f;
};

module.exports = [].concat(
  general,
  android.map(updatePlatformInFile('android')),
  ios.map(updatePlatformInFile('ios')),
  windows.map(updatePlatformInFile('windows'))
);
