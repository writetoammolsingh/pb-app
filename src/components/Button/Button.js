import React from 'react';
import PropTypes from "prop-types";

import "./Button.scss";

function Button({ children, onClick, className }) {
  return (
    <>
      <button
        className={className}
        onClick={onClick}>
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
