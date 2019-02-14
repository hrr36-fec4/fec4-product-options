import React from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ sizes }) => (
  <div className="sizes-wrapper">
    <span>Size</span>
    <a href="/">Size Chart</a>
    <div>
      <select id="size-select">
        {sizes}
      </select>
    </div>
  </div>
);

Sizes.propTypes = {
  sizes: PropTypes.instanceOf(Array),
};

Sizes.defaultProps = {
  sizes: [],
};

export default Sizes;
