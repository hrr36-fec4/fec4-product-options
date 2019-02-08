const utils = require('../../db/utils.js');

describe('generateFakeVariants', () => {
  test('should exist', () => {
    expect(utils.generateFakeVariants).toBeDefined();
  });

  test('should return an array', () => {
    let fakeVariants = utils.generateFakeVariants('123456');
    expect(Array.isArray(fakeVariants)).toBe(true);
  });
});

describe('generateFakeProduct', () => {
  test('should exist', () => {
    expect(utils.generateFakeProduct).toBeDefined();
  });

  test('should return an object', () => {
    let fakeProduct = utils.generateFakeProduct();
    expect(typeof fakeProduct).toBe('object');
  });
});
