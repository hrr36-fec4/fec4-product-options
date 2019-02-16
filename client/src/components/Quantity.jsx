import React from 'react';

const Quantity = () => (
  <div className="quantity-wrapper">
    <label htmlFor="quantity-input">
      <div className="quantity-label">Quantity</div>
      <button type="button">
        <i className="fas fa-minus" />
      </button>
      <input id="quantity-input" type="text" placeholder="1" />
      <button type="button">
        <i className="fas fa-plus" />
      </button>
    </label>
  </div>
);

export default Quantity;
