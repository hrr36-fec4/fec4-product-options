import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ color, handleColorClick }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className="color" style={style} onClick={() => handleColorClick(color)} />
  );
};

Color.propTypes = {
  color: PropTypes.string,
  handleColorClick: PropTypes.func,
};

Color.defaultProps = {
  color: '',
  handleColorClick: () => {},
};

export default Color;
