const config = require('./config');

module.exports = {
  siteUrl: process.env.SITE_URL || config.siteMetadata.siteUrl,
  generateRobotsTxt: process.env.CONTEXT === 'production', // only generate robots.txt for prod
  // ...other options
};
