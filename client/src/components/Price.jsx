import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <div className="price-wrapper">
    $
    {price}
  </div>
);

Price.propTypes = {
  price: PropTypes.string,
};

Price.defaultProps = {
  price: '',
};

export default Price;
