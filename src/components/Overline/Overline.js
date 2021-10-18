import React from 'react';

import * as classes from './Overline.module.css';

const Overline = ({ children }) => (
  <h6 className={classes.overline}>{children}</h6>
);

export default Overline;
