import React from 'react';

import * as classes from './TypeLabel.module.css';

const TypeLabel = ({ children }) => (
  <span className={classes.typeLabel}>{children}</span>
);

export default TypeLabel;
