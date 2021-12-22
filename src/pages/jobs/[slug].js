import { Container, Heading, Stack } from '@chakra-ui/react';

import { Layout } from '../../components';
import getJobs from '../../lib/jobLoader';
import getJobUrl from '../../utils/getJobUrl';

export async function getStaticPaths() {
  const jobs = await getJobs();

  return {
    paths: jobs.map((job) => {
      return {
        params: {
          slug: getJobUrl(job),
        },
      };
    }),
    fallback: false,
  };
}

const JobPage = ({ job }) => {
  return (
    <Layout>
      <Container>
        <Stack>
          <Heading as="h1">{job.title}</Heading>
        </Stack>
      </Container>
    </Layout>
  );
};

export default JobPage;
