import React from 'react';
import { Link } from 'gatsby';

import { Container, Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';

import classes from './JobPostItem.module.css';
import { Button } from '../';


const JobPostItem = ({ job }) => {
    const { title, company, location, paid } = job.frontmatter;
    const jobUrl = `/jobs/${slugify(company)}-${slugify(title)}`;

    return (
        <Col>
            {/* cover image and title shown on large views */}
            <div>
                <h2 className="d-none d-sm-none d-lg-block">
                    <Link className={classes.title} to={jobUrl}>
                        {title}
                    </Link>
                </h2>
                <h3 className={classes.company}>{company}</h3>
                <p className={classes.location}>{location}</p>
                <Link to={jobUrl}>
                    <Button className={classes.button}>Find out more</Button>
                </Link>
            </div>
        </Col>
    );
};

export default JobPostItem;
