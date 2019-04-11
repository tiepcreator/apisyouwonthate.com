import React from 'react';

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}
    {` APIs You Won't Hate, Built with `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
