import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ rating }) => {
  let num = Math.floor(rating);
  const decimal = rating - num;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (num > 0) {
      stars.push(<i className="fas fa-star" key={i} />);
    } else if (num === 0 && decimal >= 0.5) {
      stars.push(<i className="fas fa-star-half-alt" key={i} />);
    } else {
      stars.push(<i className="far fa-star" key={i} />);
    }
    num -= 1;
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
