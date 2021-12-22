import slugify from './slugify';

const getJobUrl = (job) =>
  `/jobs/${slugify(job.company)}-${slugify(job.title)}`;
