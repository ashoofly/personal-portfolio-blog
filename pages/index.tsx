import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetServerSideProps } from 'next';
import { siteTitle } from '../components/layout';
import sectionStyles from '../styles/section.module.css';
import { Box, Typography } from '@mui/material';
import Timeline from '../components/sections/timeline';
import Summary from '../components/sections/summary';
import { getFileContent } from '../lib/text';
import type { NextPage } from 'next'

type HomeProps = {
  summary: string
}

const Home: NextPage = (props: HomeProps) => {
  const { summary } = props;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Summary content={summary} />
      <section id="projects" className={`${sectionStyles.vertical} ${sectionStyles.light}`}>
        <header>
          <Typography component="h2" variant="h3" fontWeight="bold" align="center">
                Projects
          </Typography>
        </header>
        <section>
          <header>
            <Typography component="h4" variant="h4" fontWeight="bold">
                  This Site
            </Typography>
          </header>
          <summary>
            <p>This site was created with <b>Next.js</b>, written in <b>TypeScript</b>, styled with <b>MaterialUI</b>, hosted on <b>Vercel</b>. </p>
          </summary>
        </section>

        <section>
          <header>
            <Typography component="h4" variant="h4" fontWeight="bold">
                  Crossword with Me
            </Typography>
          </header>
          <figure>
            [Screenshots / images of app]
          </figure>
          <summary>
            <p>full-stack live multi-player collaborative crossword web app using mobile-first responsive design</p>
            <p><b>React, Redux, WebSockets, NodeJS, Express, and Firebase (Real-Time Database, Cloud Functions, and Authentication)</b></p>
          </summary>
        </section>
      </section>

      <section id="experience" className={`${sectionStyles.vertical}`}>
        <header>
          <Typography component="h2" variant="h3" fontWeight="bold" align="center">
                Experience
          </Typography>
          <Typography component="p" align="center">
                My professional journey so far
          </Typography>
        </header>
        <Timeline />
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const summary = await getFileContent('summary');
  return {
    props: {
      summary
    }
  };
}

export default Home;
