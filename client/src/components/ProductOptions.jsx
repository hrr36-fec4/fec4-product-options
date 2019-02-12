import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Color from './Color.jsx';
import Size from './Size.jsx';

class ProductOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      variant: {},
      colors: [],
      sizes: []
    };

    this.getRandomProduct = this.getRandomProduct.bind(this);
    this.getColors = this.getColors.bind(this);
    this.getSizes = this.getSizes.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    axios.get('http://localhost:3001/products/random')
      .then((response) => {
        let randomProduct = response.data;
        let randomVariant = randomProduct.variants[Math.floor(Math.random() * randomProduct.variants.length)];

        this.setState({
          product: randomProduct,
          variant: randomVariant,
          colors: this.getColors(randomProduct),
          sizes: this.getSizes(randomProduct)
        });
      });
  }

  getColors(product) {
    return product.variants.map((variant, i) => <Color color={variant.color} key={i} />)
  }

  getSizes(product) {
    let uniqueSizes = product.variants.reduce((accum, currentVariant) => {
      let currentSize = currentVariant.size;
      return accum.concat(!accum.includes(currentSize) ? currentSize : []);
    }, []);

    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
    let sortedUniqueSizes = uniqueSizes.sort((a, b) => {
      return sizeOptions.indexOf(a) - sizeOptions.indexOf(b);
    });

    return sortedUniqueSizes.map((uniqueSize, i) => <Size size={uniqueSize} key={i} />)
  }

  render() {
    return (
      <div className="productOptions">
        <div className="brand"><a href="#">{this.state.product.brand}</a></div>
        <div className="title">{this.state.product.title}</div>
        <div className="itemId">Item #{this.state.product.itemId}</div>
        <div className="price">${this.state.variant.price}</div>
        <div className="freeShipping" style={{display: this.state.product.freeShipping ? 'block' : 'none'}}>
          <a href="#"><i className="fas fa-truck"></i>This item ships for FREE!</a>
        </div>
        <div className="colors">{this.state.colors}</div>
        <div className="sizes">
          <label htmlFor="size-select">Size</label>
          <select id="size-select">
            {this.state.sizes}
          </select>
        </div>
      </div>
    );
  }
}
export default ProductOptions;