import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import classes from './Button.module.css';

const Button = ({
  onClick,
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  ...rest
}) => {
  const handleClick = event => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event);
    }
  };

  const fullWidthClass = fullWidth ? classes.fullWidth : '';
  const classNames = `${classes.button} ${fullWidthClass} ${className}`;

  return (
    <div onClick={handleClick} role="button" className={classNames} {...rest}>
      {children}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};

export default Button;
