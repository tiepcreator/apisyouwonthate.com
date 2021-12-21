const fetch = require('node-fetch');

const remotiveApiHost = 'https://remotive.io/api';
const category = 'software-dev';
const search = 'api';

const FULL_TIME = 'Full Time';
const PART_TIME = 'Part Time';

const getJobs = async () => {
  const searchUrl = `${remotiveApiHost}/remote-jobs?category=${category}&search=${search}`;
  const response = await fetch(searchUrl);

  const data = await response.json();

  if (!data.jobs || data.jobs.length <= 0) {
    throw Error('no jobs found');
  }

  const normalizeJobType = {
    full_time: FULL_TIME,
    part_time: PART_TIME,
  };

  return data.jobs.map((job) => ({
    ...job,
    title: job.title,
    company: job.company_name,
    salary: job.salary,
    employment_type: normalizeJobType[job.job_type] || 'Unknown',
    location: job.candidate_required_location || 'Anywhere',
    date: job.publication_date,
    url: job.url,
    published: true,
    description: job.description,
  }));
};

export default getJobs;
