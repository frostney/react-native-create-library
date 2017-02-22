const fs = require('fs');

module.exports = (filename, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      filename,
      content,
      (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      }
    );
  });
