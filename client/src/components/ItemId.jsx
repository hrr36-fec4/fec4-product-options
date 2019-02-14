import React from 'react';
import PropTypes from 'prop-types';

const ItemId = ({ itemId }) => (
  <div className="itemId-wrapper">
    Item #
    {itemId}
  </div>
);

ItemId.propTypes = {
  itemId: PropTypes.number,
};

ItemId.defaultProps = {
  itemId: 0,
};

export default ItemId;
