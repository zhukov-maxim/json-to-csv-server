const fs = require('fs');

const io = {
  // Makes directory if it doesn't exist.
  makeDirectory: (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  },

  // Writes data to file.
  writeFile: (file, data, cb) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        throw err;
      }

      cb();
    });
  },
};

module.exports = io;
