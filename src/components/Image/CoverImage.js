import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const CoverImage = ({ src, alt, ...rest }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid {
              originalName
            }
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);
  const image = allImageSharp.edges.find(
    (edge) => edge.node.fluid.originalName === src
  );
  if (!image) {
    return null;
  }

  return (
    <GatsbyImage
      image={image.node.gatsbyImageData}
      objectFit="scale"
      alt={alt}
      {...rest}
    />
  );
};

CoverImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CoverImage;
