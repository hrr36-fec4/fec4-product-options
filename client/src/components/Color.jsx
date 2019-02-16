import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ color, handleColorClick, selected }) => {
  const classes = `color ${selected ? 'selected' : ''}`;

  const style = {
    backgroundColor: color,
  };

  return (
    <div className={classes} style={style} onClick={() => handleColorClick(color)} />
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
