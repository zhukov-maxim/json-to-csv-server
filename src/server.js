const express = require('express');
const bodyParser = require('body-parser');
const json2csv = require('json2csv');

const io = require('./io');
const utils = require('./utils');

const defaultOptions = {
  outputFolder: './output',
  port: 3001,
};

class JsonToCsvServer {
  constructor(options) {
    this.options = { ...defaultOptions, ...options };

    const { outputFolder } = this.options;

    io.makeDirectory(outputFolder);

    this.server = express();

    this.server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    this.server.use(bodyParser.json());

    this.server.get('/', (req, res) => {
      res.send('Server is running. POST JSON to save it as a CSV file.');
    });

    this.server.post('/', (req, res) => {
      const dataJSON = req.body;
      const dataCSV = json2csv({ data: dataJSON });

      const fileName = `${utils.formatDate(new Date())}.csv`;
      const path = `${outputFolder}/${fileName}`;

      io.writeFile(path, dataCSV, () => {
        console.log(`File '${path}' has been written.`);
        res.send('File saved.');
      });
    });
  }

  start() {
    const { port } = this.options;

    this.server.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  }
}

module.exports = JsonToCsvServer;
