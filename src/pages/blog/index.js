import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { FullWidthFeature } from '../../components/FullWidthFeature';

import './BlogPage.module.css';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <article>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <FullWidthFeature
              authorName="Mike Bifulco"
              date="Apr 4"
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle || node.excerpt}
            />
          </Link>
        </div>
      ))}
    </article>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
