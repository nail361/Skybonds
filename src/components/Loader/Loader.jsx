import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = (props) => {
  const { children } = props;
  return (
    <div className="loader">
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="title">{children}</div>
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Loader.defaultProps = {
  children: 'Загрузка...',
}
