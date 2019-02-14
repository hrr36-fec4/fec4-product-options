import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

const Rating = ({ averageRating, reviewCount }) => (
  <div className="rating-wrapper">
    <Stars rating={averageRating} />
    {averageRating}
    (
    {reviewCount}
    )
  </div>
);

Rating.propTypes = {
  averageRating: PropTypes.number,
  reviewCount: PropTypes.number,
};

Rating.defaultProps = {
  averageRating: 0,
  reviewCount: 0,
};

export default Rating;
