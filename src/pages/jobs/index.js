import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import { JobPostItem, Layout, Seo } from '../../components';
import getJobs from '../../lib/jobLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const jobs = await getJobs();

  return {
    props: {
      jobs,
    },
  };
};

const JobsPage = ({ jobs }) => {
  return (
    <Layout>
      <Seo title="Jobs" />
      <Container>
        <Stack>
          <Heading as="h2">API Jobs</Heading>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
            {jobs.map((job) => (
              <JobPostItem key={job.id} job={job} />
            ))}
          </SimpleGrid>
          <p>
            To add a job, make a pull request to{' '}
            <a href="https://github.com/apisyouwonthate/apisyouwonthate.com">
              the project repository
            </a>{' '}
            and use{' '}
            <a href="https://github.com/apisyouwonthate/apisyouwonthate.com/blob/master/src/content/jobs/primitive-php-developer.mdx">
              this
            </a>{' '}
            as a template to filling out your posting.
          </p>
          <p>
            {'If you would rather, you can '}
            <a href="mailto:mjtrask@gmail.com, mbifulco@live.com?subject=New API Job!">
              send us an email
            </a>
            , and we&apos;ll take care of the rest.
          </p>
        </Stack>
      </Container>
    </Layout>
  );
};

export default JobsPage;
