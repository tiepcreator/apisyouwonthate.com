import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

import classes from './AuthorDisplay.module.css';

const AuthorDisplay = ({ authorImage, name, date, readTimeInMinutes }) => {
  // some error checking to not crash renders if an author image isn't provided
  const imagePath =
    authorImage &&
    authorImage.childImageSharp &&
    authorImage.childImageSharp.fluid;

  return (
    <div className={classes.container}>
      {authorImage && (
        <Img
          fluid={authorImage.childImageSharp.fluid}
          className={classes.authorImage}
        />
      )}
      <div className={classes.metadataContainer}>
        <span className={classes.authorName}>{name}</span>
        <div>
          <span className={classes.date}>{date}</span>
          {' · '}
          <span className={classes.readingTime}>
            {readTimeInMinutes} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthorDisplay;
