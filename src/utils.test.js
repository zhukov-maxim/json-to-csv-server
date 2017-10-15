const assert = require('assert');
const utils = require('./utils');

describe('utils', () => {
  it('should pad single-digit number', () => {
    assert.strictEqual(utils.padNumber(1), '01');
  });

  it('should not pad two-digit number', () => {
    assert.strictEqual(utils.padNumber(12), '12');
  });

  it('should correctly format date and time', () => {
    const date = new Date(2017, 0, 1, 1, 1, 1);
    assert.strictEqual(utils.formatDate(date), '2017-01-01_01-01-01');
  });
});
