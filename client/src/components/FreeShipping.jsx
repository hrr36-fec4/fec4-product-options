import React from 'react';
import PropTypes from 'prop-types';

const FreeShipping = ({ freeShipping }) => (
  <div className="freeShipping-wrapper" style={{ display: freeShipping ? 'block' : 'none' }}>
    <a href="/">
      <i className="fas fa-truck" />
      This item ships for FREE!
    </a>
  </div>
);

FreeShipping.propTypes = {
  freeShipping: PropTypes.bool,
};

FreeShipping.defaultProps = {
  freeShipping: false,
};

export default FreeShipping;
