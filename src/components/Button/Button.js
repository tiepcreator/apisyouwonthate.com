import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import classes from './Button.module.css';

const Button = ({ onClick, children, to }) => {
  const handleClick = event => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const ParentComponent = to ? <Link /> : <div />;

  return to ? (
    <Link to={to} className={classes.button}>
      {children}
    </Link>
  ) : (
    <div onClick={onClick} role="button" className={classes.button}>
      {children}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
