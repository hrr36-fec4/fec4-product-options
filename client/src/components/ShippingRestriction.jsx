import React from 'react';
import PropTypes from 'prop-types';

const ShippingRestriction = ({ shippingRestriction }) => (
  <div className="shippingRestriction-wrapper" style={{ display: shippingRestriction ? 'block' : 'none' }}>
    <i className="fas fa-exclamation-triangle" />
    <span> Shipping restrictions apply. </span>
    <i className="fas fa-info-circle" />
  </div>
);

ShippingRestriction.propTypes = {
  shippingRestriction: PropTypes.bool,
};

ShippingRestriction.defaultProps = {
  shippingRestriction: false,
};

export default ShippingRestriction;
