import Image from 'next/image';
import Link from 'next/link';

import { Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { Layout, NewsletterForm } from '../../components';

import aboutPhilImage from '../../../public/images/authors/headshot-phil.jpg';
import aboutMikeImage from '../../../public/images/authors/headshot-mike.jpg';
import aboutMattImage from '../../../public/images/authors/headshot-matthew-trask.png';

import Head from 'next/head';

const AboutPage = () => {
  return (
    <Layout>
      <Container mt="2rem">
        <Stack>
          <Heading as="h1">About APIs You Won't Hate</Heading>
          <Text>
            API development is a topic very close to our hearts. APIs You Won't
            Hate started out as a book, with founder Phil pouring everything API
            related he knew, all the problems he faced, all the design decisions
            he wish he thought about earlier.
          </Text>
          <Text>
            Since the first book, APIs You Won't Hate has expanded to include
            many articles about API development, a podcast, several additional
            books, and a fantastic <Link href="/community">community</Link> of
            API developers. Our goal is simple: provide a space for this
            brilliant community to debate and share experiences knowledge with
            other smart people.
          </Text>
          <Text>
            APIs You Won{"'"}t Hate is dedicated to learning, writing, sharing
            ideas and bettering understanding of API practices. Together we can
            erradicate APIs we hate.
          </Text>
        </Stack>
        <Stack>
          <Heading as="h2">Get the newsletter</Heading>
          <NewsletterForm />
        </Stack>

        <Heading as="h2" mb="2rem">
          Meet the team
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          <Stack>
            <Image src={aboutPhilImage} alt="Phil speaking at a conference" />
            <Heading as="h3" size="lg" id="phil-sturgeon">
              Phil Sturgeon
            </Heading>
            <Text>
              Since 2010 I've worked as a freelancer, consultant, Head of API,
              and CTO, for several API-centric technology startups.
            </Text>
            <Text>
              Previously at{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://venturebeat.com/2015/04/07/carpooling-startup-ride-launches-with-help-from-ubers-first-cto/"
              >
                Ride
              </a>
              , I was given the chance to work with amazing developers,
              including several Rails API contributors. We built an event-driven
              architecture with several REST APIs and a few RPC ones, and it was
              here I learned the benefits of REST being a state machine over
              HTTP.
            </Text>
            <Text>
              Then at{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wework.com"
              >
                WeWork
              </a>
              , I used my experience to help educate developers, define
              standards for API design and architecture, and work on open-source
              tooling for OpenAPI, JSON Schema, and HTTP. WeWork has 50+ APIs,
              and here I have had a chance to learn a lot about keeping
              distributed applications performant. Timeouts, retries, circuit
              breakers, keep alive settings, and HTTP caching specificially.
            </Text>
            <Text>
              I try to turn all of this learning into books, videos, and
              articles, so others can learn easily things I've had to learn the
              hard way.
            </Text>
          </Stack>

          <Stack>
            <Image src={aboutMattImage} alt="Matt speaking at a conference" />
            <Heading as="h3" size="lg" id="matthew-trask">
              Matthew Trask
            </Heading>
          </Stack>

          <Stack>
            <Image src={aboutMikeImage} alt="Mike Bifulco's headshot" />
            <Heading as="h3" size="lg" id="mike-bifulco">
              Mike Bifulco
            </Heading>
          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default AboutPage;
