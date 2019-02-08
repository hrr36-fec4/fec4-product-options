const faker = require('faker');

let generateFakeVariants = (id) => {
  let variants = [];
  for (var i = 0; i < (1 + Math.floor(Math.random() * 6)); i++) {
    let variant = {
      itemId: id,
      price: (Math.random() * 100).toFixed(2),
      colorName: faker.commerce.color(),
      colorValue: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      size: ['XS', 'S', 'M', 'L', 'XL'][Math.floor(Math.random() * 5)]
    };
    variants.push(variant);
  }
  return variants;
};

let generateFakeProduct = () => {
  let id = Math.floor(Math.random() * 1000000);
  let fakeProduct = {
    itemId: id,
    brand: faker.commerce.productName().split(' ')[0],
    title: faker.commerce.productName(),
    averageRating: (Math.random() * 5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 100),
    freeShipping: faker.random.boolean(),
    shippingRestriction: faker.random.boolean(),
    variants: generateFakeVariants(id)
  };
  return fakeProduct;
};

exports.generateFakeVariants = generateFakeVariants;
exports.generateFakeProduct = generateFakeProduct;