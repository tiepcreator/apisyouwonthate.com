import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Media from 'react-bootstrap/Media';

const BookFeature = ({ relativePath }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "build-apis-you-wont-hate.jpg" }) {
  //       childImageSharp {
  //         # Specify the image processing specifications right in the query.
  //         # Makes it trivial to update as your page's design changes.
  //         fixed(width: 125, height: 125) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (!relativePath) return null;
  return (
    <Media>
      <Media.Body>
        {/* <Img fixed={data.file.childImageSharp.fixed} />; */}
      </Media.Body>
    </Media>
  );
};

export default BookFeature;
