import React from 'react';
import Link from 'next/link';

import { Text, Flex } from '@chakra-ui/react';

import slugify from '../../utils/slugify';
import { GitHubIcon, TwitterIcon } from '../icons';
import { Image } from '..';

import * as classes from './AuthorSummary.module.css';
import { Button } from '../Button';

const AuthorSummary = ({ author }) => {
  if (!author) return null;

  const { consultingUrl, github, name, photo, shortBio, shortName, twitter } =
    author.frontmatter;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headshotContainer}>
          <Link href={`/author/${slugify(name)}`}>
            {photo && (
              <a>
                <Image src={photo} alt={name} />
              </a>
            )}
          </Link>
        </div>
        <Link
          className={classes.authorNameContainer}
          href={`/author/${slugify(name)}`}
        >
          <a>
            <h2 className={classes.authorName}>
              <span>{name}</span>
            </h2>
          </a>
        </Link>
      </header>
      {consultingUrl && (
        <div className={classes.hire}>
          <Button fullWidth>
            <a href={consultingUrl} target="_blank" rel="noopener noreferrer">
              Hire {shortName || 'them'}
            </a>
          </Button>
        </div>
      )}

      {github && (
        <div>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={classes.icon}>
              <GitHubIcon />
            </span>{' '}
            {github}
          </a>
        </div>
      )}
      {twitter && (
        <div>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={classes.icon}>
              <TwitterIcon />
            </span>{' '}
            {twitter}
          </a>
        </div>
      )}
      <Text>{shortBio && <p>{shortBio}</p>}</Text>
    </>
  );
};

export default AuthorSummary;
