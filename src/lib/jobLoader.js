import { join } from 'path';

import {
  getAllContentFromDirectory,
  getContentBySlug,
} from './contentTypeLoader';

const jobsDirectory = join(process.cwd(), 'src', 'content', 'jobs');
const dynamicJobsDirectory = join(process.cwd(), '.jobs');
const JOB_CONTENT_TYPE = 'job';

export const getJobBySlug = async (slug) => {
  let job;
  try {
    job = await getContentBySlug(slug, jobsDirectory, JOB_CONTENT_TYPE);
  } catch {
    job = await getContentBySlug(slug, dynamicJobsDirectory, JOB_CONTENT_TYPE);
  }

  return job;
};

export const getAllJobs = async () => {
  const allJobs = await getAllContentFromDirectory(
    jobsDirectory,
    JOB_CONTENT_TYPE
  );

  const dynamicJobs = await getAllContentFromDirectory(
    dynamicJobsDirectory,
    JOB_CONTENT_TYPE
  );

  return [...allJobs, ...dynamicJobs];
};
