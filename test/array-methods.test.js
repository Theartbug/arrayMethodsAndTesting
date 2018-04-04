const chai = require('chai');
const assert = chai.assert;
const arrExports = require('../lib/array-methods');

describe('Array methods', () => {
  const array = [1, 2, 3, 4, 5];
  const arr = [1, 2,, 3, 4];

  it('maps an array', () => {
    const mapped = arrExports.map(array, (x) => x + 1);
    assert.deepEqual(mapped, [2, 3, 4, 5, 6]);
  });

  it('persists holes in array with map', () => {
    const holes = arrExports.map(arr, (x) => x + 1);
    assert.deepEqual(holes, [2, 3,, 4, 5]);
    assert.equal(holes.length, arr.length);
  });

  it('starts at given index for map', () => {
    const mapped = arrExports.map(array, (x) => x + 1, 2);
    assert.deepEqual(mapped, [4, 5, 6]);
  });

  it('filters an array', () => {
    const evens = arrExports.filter(array, (x) => x % 2 === 0);
    assert.deepEqual(evens, [2, 4]);
  });

  it('skips holes in array with filter', () => {
    const holes = arrExports.filter(arr, (x) => x % 2 === 0);
    assert.deepEqual(holes, [2, 4]);
  });

  it('starts at given index for filter', () => {
    const evens = arrExports.filter(array, (x) => x % 2 === 0, 2);
    assert.deepEqual(evens, [4]);
  });

  it('returns an index of an item in an array', () => {
    const index = arrExports.indexOf(array, (x) => x % 2 === 0);
    assert.equal(index, 1);
  });

  it('returns -1 if nothing passes in the array', () => {
    const index = arrExports.indexOf(array, (x) => x === 8);
    assert.equal(index, -1);
  });

  it('starts at given index for indexOf', () => {
    const index = arrExports.indexOf(array, (x) => x % 2 === 0, 2);
    assert.equal(index, 3);
  });

  it('returns a reduced array', () => {
    const reduced = arrExports.reduce(array, (accumulator, item) => accumulator + item);
    assert.equal(reduced, 15);
  });

  it('returns a reduced array with an initial value', () => {
    const reduced = arrExports.reduce(array, (accumulator, item) => accumulator + item, 10);
    assert.equal(reduced, 25);
  });

  it('skips holes with reduce', () => {
    const reduced = arrExports.reduce(arr, (accumulator, item) => accumulator + item);
    assert.equal(reduced, 10);
  });

  it('starts at given index with reduce', () => {
    const reduced = arrExports.reduce(array, (accumulator, item) => accumulator + item, null, 2);
    assert.equal(reduced, 12);
  });

  it('skips the hole if starting at that index with reduce', () => {
    const reduced = arrExports.reduce(arr, (accumulator, item) => accumulator + item, null, 2);
    assert.equal(reduced, 7);
  });

  it('returns true for every', () => {
    const every = arrExports.every(array, (x) => x < 10);
    assert.equal(every, true);
  });

  it('returns false for every', () => {
    const every = arrExports.every(array, (x) => x < 2);
    assert.equal(every, false);
  });

  it('starts at given index with every', () => {
    const every = arrExports.every(array, (x) => x > 4, 5);
    assert.equal(every, true);
  });

  it('skips holes in every', () => {
    const every = arrExports.every(arr, (x) => x < 10);
    assert.equal(every, true);
  });

  it('mutates array forEach', () => {
    const mutated = [];
    arrExports.forEach(array, (x) => mutated.push(x));
    assert.deepEqual(array, mutated);
  });

  it('skips holes forEach', () => {
    const mutated = [];
    arrExports.forEach(arr, (x) => mutated.push(x));
    assert.deepEqual(mutated, [1, 2, 3, 4]);
  });

  it('starts at given index forEach', () => {
    const mutated = [];
    arrExports.forEach(array, (x) => mutated.push(x), 2);
    assert.deepEqual(mutated, [3, 4, 5]);
  });

});