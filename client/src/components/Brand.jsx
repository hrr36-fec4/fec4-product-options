import React from 'react';
import PropTypes from 'prop-types';

const Brand = ({ brand }) => <div className="brand-wrapper"><a href="/">{brand}</a></div>;

Brand.propTypes = {
  brand: PropTypes.string,
};

Brand.defaultProps = {
  brand: '',
};

export default Brand;
