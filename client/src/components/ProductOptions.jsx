import React from 'react';
import axios from 'axios';
import Stars from './Stars';
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
        <div className="brand"><a href="/">{product.brand}</a></div>
        <div className="title">{product.title}</div>
        <div className="itemId">
          Item #
          {product.itemId}
        </div>
        <div className="rating">
          <Stars rating={product.averageRating} />
          {product.averageRating}
          (
          {product.reviewCount}
          )
        </div>
        <div className="price">
          $
          {variant.price}
        </div>
        <div className="freeShipping" style={{ display: product.freeShipping ? 'block' : 'none' }}>
          <a href="/">
            <i className="fas fa-truck" />
            This item ships for FREE!
          </a>
        </div>
        <div className="colors">{colors}</div>
        <div className="sizes">
          Size
          <select id="size-select">
            {sizes}
          </select>
        </div>
      </div>
    );
  }
}

export default ProductOptions;
