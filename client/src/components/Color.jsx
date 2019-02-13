import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ color }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className="color" style={style} />
  );
};

Color.propTypes = {
  color: PropTypes.string,
};

Color.defaultProps = {
  color: '',
};

export default Color;
