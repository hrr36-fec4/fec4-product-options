import React from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ sizes }) => (
  <div className="sizes-wrapper">
    Size
    <select id="size-select">
      {sizes}
    </select>
  </div>
);

Sizes.propTypes = {
  sizes: PropTypes.instanceOf(Array),
};

Sizes.defaultProps = {
  sizes: [],
};

export default Sizes;
