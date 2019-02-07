const mongoose = require('mongoose');
const db = require('./index.js');
const Product = require('./Product.js');

const sampleProducts = [
  {
    itemId: 893303,
    brand: 'Patagonia',
    title: 'Patagonia Houdini Zip-Front Jacket - Men\'s',
    averageRating: 4.5,
    reviewCount: 78,
    freeShipping: true,
    shippingRestriction: true,
    variants: [
      {
        itemId: 893303,
        price: 99.00,
        colorName: 'Big Sur Blue',
        colorValue: '#124359',
        size: 'M'
      },
      {
        itemId: 893303,
        price: 68.93,
        colorName: 'Copper Ore',
        colorValue: '#943e1e',
        size: 'S'
      },
      {
        itemId: 893303,
        price: 99.00,
        colorName: 'Black',
        colorValue: '#2e2b2c',
        size: 'L'
      }
    ]
  }
]

const insertSampleProducts = () => {
  Product.create(sampleProducts)
    .then(() => db.close())
    .catch((err) => console.log(err));
}

insertSampleProducts();