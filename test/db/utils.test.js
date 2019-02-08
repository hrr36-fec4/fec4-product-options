const utils = require('../../db/utils.js');

describe('generateFakeVariants', () => {

  test('should exist', () => {
    expect(utils.generateFakeVariants).toBeDefined();
  });

  test('should return an array', () => {
    let fakeVariants = utils.generateFakeVariants('123456');
    expect(Array.isArray(fakeVariants)).toBe(true);
  });

  test('should return at least one Variant', () => {
    let fakeVariants = utils.generateFakeVariants('123456');
    expect(fakeVariants.length).toBeGreaterThan(0);
  });

  test('should return an array of Variant objects whose properties match the schema keys', () => {
    let fakeVariant = utils.generateFakeVariants('123456')[0];
    let props = Object.keys(fakeVariant);
    expect(props).toEqual(['itemId', 'price', 'color', 'size']);
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

  test('should return a Product object whose properties match the schema keys', () => {
    let fakeProduct = utils.generateFakeProduct();
    let props = Object.keys(fakeProduct);
    expect(props).toEqual(['itemId', 'brand', 'title', 'averageRating', 'reviewCount', 'freeShipping', 'shippingRestriction', 'variants']);
  });

  test('should return Product variants whose \'itemId\' matches that of the product', () => {
    let fakeProduct = utils.generateFakeProduct();
    expect(fakeProduct.variants[0].itemId).toBe(fakeProduct.itemId);
  });
});
