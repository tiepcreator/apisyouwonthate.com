import React from 'react';
import PropTypes from 'prop-types';

import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';

import Img from 'gatsby-image/withIEPolyfill';

import classes from './AuthorDisplay.module.css';

const AuthorDisplay = ({ authorImage, name, date, readTimeInMinutes }) => {
  // const author = useStaticQuery(graphql(``));

  const readTimeDisplay = readTimeInMinutes && (
    <span className={classes.readingTime}>{readTimeInMinutes} min read</span>
  );

  const dateDisplay = date && (
    <span className={classes.date}>
      {moment(new Date(date)).format('MMM D YYYY')}
    </span>
  );

  return (
    <div className={classes.container}>
      {authorImage && (
        <Img fluid={authorImage} className={classes.authorImage} />
      )}
      <div className={classes.metadataContainer}>
        <span className={classes.authorName}>{name}</span>
        <div>
          {dateDisplay}
          {date && readTimeDisplay && ` · `}
          {readTimeDisplay}
        </div>
      </div>
    </div>
  );
};

AuthorDisplay.propTypes = {
  authorImage: PropTypes.shape({}),
  name: PropTypes.string,
  date: PropTypes.string,
  readTimeInMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AuthorDisplay;
