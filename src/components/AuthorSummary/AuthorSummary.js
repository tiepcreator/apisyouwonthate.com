import React from 'react';
import { Link } from 'gatsby';

import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';
import { GitHubIcon, TwitterIcon } from '../icons';
import { Image } from '..';

import classes from './AuthorSummary.module.css';
import { Button } from '../Button';

const AuthorSummary = ({ author }) => {
  const {
    consultingUrl,
    github,
    name,
    photo,
    shortBio,
    shortName,
    twitter,
  } = author.frontmatter;

  return (
    <Col xs={12} md={4}>
      <Row>
        <Col>
          <header className={classes.header}>
            <div className={classes.headshotContainer}>
              <Link to={`/author/${slugify(name)}`}>
                {photo && <Image src={photo} />}
              </Link>
            </div>
            <Link
              className={classes.authorNameContainer}
              to={`/author/${slugify(name)}`}
            >
              <h2 className={classes.authorName}>
                <span>{name}</span>
              </h2>
            </Link>
          </header>
        </Col>
      </Row>
      {consultingUrl && (
        <Row>
          <Col>
            <div className={classes.hire}>
              <Button fullWidth>
                <a
                  href={consultingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire {shortName || 'them'}
                </a>
              </Button>
            </div>
          </Col>
        </Row>
      )}
      <Row className={classes.socialLinks}>
        <Col>
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
        </Col>
      </Row>
      <Row>
        <Col>{shortBio && <p>{shortBio}</p>}</Col>
      </Row>
    </Col>
  );
};

export default AuthorSummary;
