import React from 'react';
import PropTypes from 'prop-types';

const Size = ({ size }) => <option>{size}</option>;

Size.propTypes = {
  size: PropTypes.string,
};

Size.defaultProps = {
  size: '',
};

export default Size;
