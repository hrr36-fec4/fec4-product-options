import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
  let num = Math.floor(rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (num > 0) {
      stars.push(<i className="fas fa-star" />);
      num -= 1;
    } else {
      stars.push(<i className="far fa-star" />);
    }
  }

  return <div className="stars">{stars}</div>;
};

Stars.propTypes = {
  rating: PropTypes.number,
};

Stars.defaultProps = {
  rating: 0,
};

export default Stars;
