const faker = require('faker');

exports.generateFakeVariants = (id) => {
  let variants = [];
  for (var i = 0; i < (Math.floor(Math.random() * 6)); i++) {
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

exports.generateFakeProduct = () => {
  let id = Math.floor(Math.random() * 1000000);
  let fakeProduct = {
    itemId: id,
    brand: faker.commerce.productName(),
    title: faker.commerce.productName(),
    averageRating: Math.floor(Math.random() * 5),
    reviewCount: Math.floor(Math.random() * 100),
    freeShipping: faker.random.boolean(),
    shippingRestriction: faker.random.boolean(),
    variants: generateFakeVariants(id)
  };
  return fakeProduct;
};