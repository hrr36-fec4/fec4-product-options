import React from 'react';

const ShippingOptions = () => (
  <div className="shippingOptions-wrapper">
    <div>
      <label htmlFor="ship-to-address">
        <input type="radio" id="ship-to-address" name="shipping-option" checked />
        Ship to address
      </label>
    </div>
    <div>
      <label htmlFor="pick-up">
        <input type="radio" id="pick-up" name="shipping-option" />
        Pick up in store - Free
      </label>
    </div>
    <a href="/">Find a store near you</a>
  </div>
);

export default ShippingOptions;
