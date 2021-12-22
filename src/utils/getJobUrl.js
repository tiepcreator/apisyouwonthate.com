import slugify from './slugify';

export const getJobUrl = (job) => {
  return `/jobs/${slugify(job.frontmatter.company)}-${slugify(
    job.frontmatter.title
  )}`;
};

export default getJobUrl;
