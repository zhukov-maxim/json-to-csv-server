const JsonToCsvServer = require('./server');

const options = {
  port: 9732,
};

const app = new JsonToCsvServer(options);

app.start();
