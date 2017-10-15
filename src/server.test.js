const assert = require('assert');
const JsonToCsvServer = require('./server');

describe('json-to-csv-server', () => {
  it('should start without throwing', () => {
    assert.doesNotThrow(() => {
      const server = new JsonToCsvServer();
      server.start();
    });
  });
});
