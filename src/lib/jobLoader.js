// Install gray-matter and date-fns
import { join } from 'path';

import {
  getAllContentFromDirectory,
  getContentBySlug,
} from './contentTypeLoader';

const jobsDirectory = join(process.cwd(), 'src', 'content', 'jobs');
const JOB_CONTENT_TYPE = 'job';

export const getJobBySlug = async (slug) => {
  const job = await getContentBySlug(slug, jobsDirectory, JOB_CONTENT_TYPE);

  return job;
};

export const getAllJobs = async () => {
  const allJobs = await getAllContentFromDirectory(
    jobsDirectory,
    JOB_CONTENT_TYPE
  );

  return allJobs;
};
