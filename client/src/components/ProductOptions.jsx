import React from 'react';
import axios from 'axios';
import Brand from './Brand';
import Title from './Title';
import ItemId from './ItemId';
import Rating from './Rating';
import Price from './Price';
import Color from './Color';
import Size from './Size';

class ProductOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      variant: {},
      colors: [],
      sizes: [],
    };

    this.getRandomProduct = this.getRandomProduct.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    axios.get('http://localhost:3001/products/random')
      .then((response) => {
        const randomProduct = response.data;
        const randomIndex = Math.floor(Math.random() * randomProduct.variants.length);
        const randomVariant = randomProduct.variants[randomIndex];

        this.setState({
          product: randomProduct,
          variant: randomVariant,
          colors: this.constructor.getColors(randomProduct),
          sizes: this.constructor.getSizes(randomProduct),
        });
      });
  }

  static getColors(product) {
    return product.variants.map(variant => <Color color={variant.color} key={variant['_id']} />);
  }

  static getSizes(product) {
    const uniqueSizes = product.variants.reduce((accum, currentVariant) => {
      const currentSize = currentVariant.size;
      return accum.concat(!accum.includes(currentSize) ? currentSize : []);
    }, []);

    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
    const sorted = uniqueSizes.sort((a, b) => sizeOptions.indexOf(a) - sizeOptions.indexOf(b));

    return sorted.map(uniqueSize => <Size size={uniqueSize} key={uniqueSize} />);
  }

  render() {
    const {
      product,
      variant,
      colors,
      sizes,
    } = this.state;

    return (
      <div className="productOptions">
        <Brand brand={product.brand} />
        <Title title={product.title} />
        <ItemId itemId={product.itemId} />
        <Rating averageRating={product.averageRating} reviewCount={product.reviewCount} />
        <Price price={variant.price} />
        <div className="freeShipping-wrapper" style={{ display: product.freeShipping ? 'block' : 'none' }}>
          <a href="/">
            <i className="fas fa-truck" />
            This item ships for FREE!
          </a>
        </div>
        <div className="colors-wrapper">{colors}</div>
        <div className="sizes-wrapper">
          Size
          <select id="size-select">
            {sizes}
          </select>
        </div>
        <div className="quantity-wrapper">
          Quantity
          <button type="button">-</button>
          <input id="quantity-input" />
          <button type="button">+</button>
        </div>
      </div>
    );
  }
}

export default ProductOptions;
