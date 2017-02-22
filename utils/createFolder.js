const mkdirp = require('mkdirp');

module.exports = folder =>
  new Promise((resolve, reject) => {
    if (!folder) {
      resolve();
      return;
    }

    mkdirp(folder, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
