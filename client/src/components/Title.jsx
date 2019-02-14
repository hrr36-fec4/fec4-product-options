import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => <div className="title-wrapper">{title}</div>;

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: '',
};

export default Title;
