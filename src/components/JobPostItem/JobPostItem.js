import React from 'react';
import { Link } from 'gatsby';

import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';

import classes from './JobPostItem.module.css';

const JobPostItem = ({ job }) => {
    const { title, company, salary, date } = job.frontmatter;
    return (
        <Col xs={12} sm={12} md={12} lg={12}>
            <Link to={`/jobs/${slugify(company, title)}`} className={classes.container}>
                <Row>
                    <Col>
                        <main>
                            <h2 className={classes.title}>{title}</h2>
                            <p className={classes.company}>{company}</p>
                        </main>
                    </Col>
                </Row>
            </Link>
        </Col>
    );
};

export default JobPostItem;
