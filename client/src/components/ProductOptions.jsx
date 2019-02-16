import React from 'react';
import axios from 'axios';
import Brand from './Brand';
import Title from './Title';
import ItemId from './ItemId';
import Rating from './Rating';
import Price from './Price';
import FreeShipping from './FreeShipping';
import Colors from './Colors';
import Color from './Color';
import Sizes from './Sizes';
import Size from './Size';
import Quantity from './Quantity';
import ShippingRestriction from './ShippingRestriction';
import ShippingOptions from './ShippingOptions';
import AddTo from './AddTo';
import ReturnPolicy from './ReturnPolicy';

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
    this.handleColorClick = this.handleColorClick.bind(this);
    this.updateVariant = this.updateVariant.bind(this);
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
        const productColors = this.getColors(randomProduct);
        const productSizes = this.constructor.getSizes(randomProduct);

        this.setState({
          product: randomProduct,
          variant: randomVariant,
          colors: productColors,
          sizes: productSizes,
        });
      });
  }

  getColors(product) {
    return product.variants.map(variant => <Color color={variant.color} key={variant['_id']} handleColorClick={this.handleColorClick} />);
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

  handleColorClick(color) {
    const { product } = this.state;
    const variantClicked = product.variants.filter(variant => variant.color === color)[0];
    this.updateVariant(variantClicked);
  }

  updateVariant(variant) {
    this.setState({
      variant,
    });
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
        <FreeShipping freeShipping={product.freeShipping} />
        <Colors colors={colors} handleColorClick={this.handleColorClick} />
        <Sizes sizes={sizes} />
        <Quantity />
        <ShippingRestriction shippingRestriction={product.shippingRestriction} />
        <hr />
        <ShippingOptions />
        <AddTo />
        <ReturnPolicy />
      </div>
    );
  }
}

export default ProductOptions;
