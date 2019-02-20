import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ color, handleColorClick, selected }) => {
  const classes = `color ${selected ? 'selected' : ''}`;

  const style = {
    backgroundColor: color,
  };

  return (
    <div className={classes} style={style} onClick={() => handleColorClick(color)} onKeyPress={() => {}} role="button" tabIndex="0" />
  );
};

Color.propTypes = {
  color: PropTypes.string,
  handleColorClick: PropTypes.func,
  selected: PropTypes.bool,
};

Color.defaultProps = {
  color: '',
  handleColorClick: () => {},
  selected: false,
};

export default Color;
