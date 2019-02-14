import React from 'react';
import PropTypes from 'prop-types';

const Colors = ({ colors }) => (
  <div className="colors-wrapper">{colors}</div>
);

Colors.propTypes = {
  colors: PropTypes.instanceOf(Array),
};

Colors.defaultProps = {
  colors: [],
};

export default Colors;
