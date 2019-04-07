import React from 'react';

import Image from '../image';
import { AuthorDisplay } from '../AuthorDisplay';

import './FullWidthFeature.module.css';

const FullWidthFeature = ({ author, date, image, subtitle, title }) => (
  <article>
    <Image data={image} />
    <main>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <AuthorDisplay name={author.name} date={date} />
    </main>
  </article>
);

export default FullWidthFeature;
