import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      variant: {}
    };

    this.getRandomProduct = this.getRandomProduct.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    axios.get('http://localhost:3001/products/random')
      .then((response) => {

        let randomVariantIndex = Math.floor(Math.random() * response.data.variants.length);

        this.setState({
          product: response.data,
          variant: response.data.variants[randomVariantIndex]
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
        <div className="freeShipping">
          <a href="#"><i class="fas fa-truck"></i>This item ships for FREE!</a>
        </div>
      </div>
    );
  }
}
export default ProductOptions;