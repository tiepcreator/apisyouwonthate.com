import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layout';

import classes from './Post.module.css';

const Post = ({ data, pageContext }) => {
  const post = data.mdx;

  console.log('trying to render a post', post);

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>

      <h2>{post.frontmatter.title}</h2>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
        scope
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Post;
