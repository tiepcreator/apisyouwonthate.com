import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import { AuthorDisplay } from '../AuthorDisplay';

import './FullWidthFeature.module.css';

const FullWidthFeature = ({ authorName, date, image, subtitle, title }) => (
  <article>
    <Image src={image} />
    <main>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <AuthorDisplay name={authorName} date={date} />
    </main>
  </article>
);

FullWidthFeature.propTypes = {
  authorName: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.shape({}),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default FullWidthFeature;
