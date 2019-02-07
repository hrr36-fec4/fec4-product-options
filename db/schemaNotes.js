var productSchema = new Schema({
  itemId: ObjectId,
  brand: String,
  title: String,
  averageRating: Number,
  reviewCount: Number,
  freeShipping: Boolean,
  shippingRestriction: Boolean,
  variants: [variantSchema]
});

var variantSchema = new Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  price: Number,
  colorName: String,
  colorValue: String,
  size: String
});


{
  'Big Sur Blue': '#124359',
  'Black': '#2e2b2c',
  'Copper Ore': '#943e1e',
  'Micro Green/Bunker Camo': '#414135',
  'Textile Green': '#998300'
}

['S', 'M', 'L', 'XL']


[
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
        itemId, 893303,
        price: 99.00,
        colorName: 'Big Sur Blue',
        colorValue: '#124359',
        size: 'M'
      },
      {
        itemId, 893303,
        price: 68.93,
        colorName: 'Copper Ore',
        colorValue: '#943e1e',
        size: 'S'
      },
      {
        itemId, 893303,
        price: 99.00,
        colorName: 'Black',
        colorValue: '#2e2b2c',
        size: 'L'
      }
    ]
  }
]

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
      itemId, 893303,
      price: 99.00,
      colorName: 'Big Sur Blue',
      colorValue: '#124359',
      size: 'M'
    },
    {
      itemId, 893303,
      price: 68.93,
      colorName: 'Copper Ore',
      colorValue: '#943e1e',
      size: 'S'
    },
    {
      itemId, 893303,
      price: 99.00,
      colorName: 'Black',
      colorValue: '#2e2b2c',
      size: 'L'
    }
  ]
}
