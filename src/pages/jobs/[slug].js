import Link from 'next/link';
import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { Layout, Overline, Seo } from '../../components';

import { getJobBySlug, getAllJobs } from '../../lib/jobLoader';

export async function getStaticProps({ params }) {
  const job = await getJobBySlug(params.slug);

  return {
    props: {
      job: {
        ...job,
      },
    },
  };
}

export async function getStaticPaths() {
  const jobs = await getAllJobs();

  return {
    paths: jobs.map((job) => {
      return {
        params: {
          slug: job.slug,
        },
      };
    }),
    fallback: false,
  };
}

const JobPage = ({ job }) => {
  const { company, contact, location, remote, title, url } = job.frontmatter;
  return (
    <Layout>
      <Seo
        title={`${title} - API Jobs`}
        description={`${company} is hiring a ${title}. Find more jobs for API Developers at apisyouwonthate.com/jobs`}
        canonical={url}
      />
      <Container maxWidth={'70ch'}>
        <Stack>
          <Overline>{location}</Overline>
          <Heading as="h1">
            {company} &middot; {title}
          </Heading>

          <MDXRemote {...job.source} />

          <Spacer />

          <SimpleGrid minChildWidth={'200px'} spacing={8}>
            {contact && (
              <Link href={`mailto:${contact}`} passHref>
                <Button variant={'link'} as="a" colorScheme={'purple'}>
                  Contact
                </Button>
              </Link>
            )}
            {url && (
              <Link href={url} passHref>
                <Button as="a" colorScheme={'purple'}>
                  Apply Now
                </Button>
              </Link>
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  );
};

export default JobPage;
