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
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    axios.get('http://localhost:3001/products/random')
      .then((response) => {
        let randomProduct = response.data;
        let randomVariant = randomProduct.variants[Math.floor(Math.random() * randomProduct.variants.length)];

        const getUniqueSizes = () => {
          return randomProduct.variants.reduce((accum, currentVariant) => {
            let currentSize = currentVariant.size;
            return accum.concat(!accum.includes(currentSize) ? currentSize : []);
          }, []);
        };

        this.setState({
          product: randomProduct,
          variant: randomVariant,
          colors: randomProduct.variants.map((variant, i) => <Color color={variant.color} key={i} />),
          sizes: getUniqueSizes().map((uniqueSize, i) => <Size size={uniqueSize} key={i} />)
        });
      });
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