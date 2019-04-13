import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import classes from './Button.module.css';

const Button = ({
  onClick,
  children,
  className = '',
  disabled = false,
  to,
  ...rest
}) => {
  const handleClick = event => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event);
    }
  };

  const classNames = `${classes.button} ${className}`;

  return to ? (
    <Link to={to} className={classNames} {...rest}>
      {children}
    </Link>
  ) : (
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
