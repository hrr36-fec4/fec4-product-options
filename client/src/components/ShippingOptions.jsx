import React from 'react';

const ShippingOptions = () => (
  <div className="shippingOptions-wrapper">
    <div className="radio-wrapper">
      <label htmlFor="ship-to-address">
        <input type="radio" id="ship-to-address" name="shipping-option" defaultChecked />
        &nbsp;&nbsp;Ship to address
      </label>
    </div>
    <div className="radio-wrapper">
      <label htmlFor="pick-up">
        <input type="radio" id="pick-up" name="shipping-option" />
        &nbsp;&nbsp;Pick up in store - Free
      </label>
    </div>
    <a href="/">Find a store near you</a>
  </div>
);

export default ShippingOptions;
