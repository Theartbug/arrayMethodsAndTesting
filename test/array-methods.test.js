const chai = require('chai');
const assert = chai.assert;
const arrExports = require('../lib/array-methods');

describe('Array methods', () => {
  const array = [1, 2, 3, 4, 5];

  it('maps an array', () => {
    const mapped = arrExports.map(array, (x) => x + 1);
    assert.deepEqual(mapped, [2, 3, 4, 5, 6]);
  });

  it('persists holes in array', () => {
    const arr = [1, 2,, 3, 4];
    const holes = arrExports.map(arr, (x) => x + 1);
    assert.deepEqual(holes, [2, 3,, 4, 5]);
  });

});