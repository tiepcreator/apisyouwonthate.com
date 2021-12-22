import React from 'react';

import {
  Container,
  ListItem,
  Stack,
  Heading,
  UnorderedList,
} from '@chakra-ui/react';

import { Layout, Seo } from '../../components';

const ConductPage = () => (
  <Layout>
    <Seo title="Code of Conduct" />

    <Container as="article" justifyContent="center">
      <Stack maxW="70ch" margin="0 auto">
        <Heading as="h1" id="contributor-covenant-code-of-conduct">
          Code of Conduct
        </Heading>

        <Heading as="h2" size="lg" id="our-pledge">
          Our Pledge
        </Heading>

        <p>
          {
            'In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.'
          }
        </p>

        <Heading as="h2" size="lg" id="our-standards">
          Our Standards
        </Heading>

        <p>
          {
            'Examples of behavior that contributes to creating a positive environment include:'
          }
        </p>

        <UnorderedList>
          <ListItem>Using welcoming and inclusive language</ListItem>
          <ListItem>
            Being respectful of differing viewpoints and experiences
          </ListItem>
          <ListItem>Gracefully accepting constructive criticism</ListItem>
          <ListItem>Focusing on what is best for the community</ListItem>
          <ListItem>Showing empathy towards other community members</ListItem>
        </UnorderedList>

        <p>Examples of unacceptable behavior by participants include:</p>

        <UnorderedList>
          <ListItem>
            {
              'The use of sexualized language or imagery and unwelcome sexual attention or advances'
            }
          </ListItem>
          <ListItem>
            {
              'Trolling, insulting/derogatory comments, and personal or political attacks '
            }
          </ListItem>
          <ListItem>Public or private harassment</ListItem>
          <ListItem>
            {
              'Publishing others’ private information, such as a physical or electronic address, without explicit permission '
            }
          </ListItem>
          <ListItem>
            {
              'Other conduct which could reasonably be considered inappropriate in a professional setting'
            }
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" id="our-responsibilities">
          Our Responsibilities
        </Heading>

        <p>
          {
            'Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.'
          }
        </p>

        <p>
          {
            'Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.'
          }
        </p>

        <Heading as="h2" size="lg" id="scope">
          Scope
        </Heading>

        <p>
          {
            'This Code of Conduct applies within all project spaces, and it also applies when an individual is representing the project or its community in public spaces. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.'
          }
        </p>

        <Heading as="h2" size="lg" id="enforcement">
          Enforcement
        </Heading>

        <p>
          {
            'Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at '
          }
          <a href="mailto:phil+coc@apisyouwonthate.com">
            phil+coc@apisyouwonthate.com
          </a>
          {
            '. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.'
          }
        </p>

        <p>
          {
            'Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project’s leadership.'
          }
        </p>

        <Heading as="h2" size="lg" id="attribution">
          Attribution
        </Heading>

        <p>
          This Code of Conduct is adapted from the{' '}
          <a
            href="https://www.contributor-covenant.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contributor Covenant
          </a>
          , version 1.4, available at{' '}
          <a
            href="https://www.contributor-covenant.org/version/1/4/code-of-conduct"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
          </a>
          .
        </p>

        <p>
          {'For answers to common questions about this code of conduct, see '}
          <a
            href="https://www.contributor-covenant.org/faq"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.contributor-covenant.org/faq
          </a>
          .
        </p>
      </Stack>
    </Container>
  </Layout>
);

export default ConductPage;
