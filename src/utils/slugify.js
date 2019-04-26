import slugifyLib from 'slugify';

const slugify = input => {
  return slugifyLib(input, {
    lower: true,
    replacement: '',
    remove: /[…*+~.()'"!:@]/g,
  });
};

export default slugify;
