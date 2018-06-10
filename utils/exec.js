var cp = require('child_process');

module.exports = (command, options) => {
  return new Promise((resolve, reject) => {
    try {
      // We use execSync in here to be able to output the stdout to standard out
      const stdout = cp.execSync(command, options);
      return resolve(stdout);
    } catch (e) {
      return reject(e);
    }
  });
};
