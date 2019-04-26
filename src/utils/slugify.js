// using require syntax so this works in gatsby-node.js as well 😞
const slugifyLib = require('slugify');

const slugify = input => {
  return slugifyLib(input, {
    lower: true,
    replacement: '',
    // this regex contains characters to remove from slugs.  Add any that may be missing!
    remove: /[…?/*+~.,()'"!:@]/g,
  });
};

module.exports = slugify;
