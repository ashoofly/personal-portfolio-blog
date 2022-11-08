import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import indexStyles from '../styles/index.module.css';
import sectionStyles from '../styles/section.module.css';
import { Box, Typography } from '@mui/material';
import TypingEffect from '../components/typingEffect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Timeline from '../components/timeline';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="about" className={`${sectionStyles.horizontal} ${sectionStyles.dark} ${indexStyles.intro}`}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={250}
          width={250}
          alt="Angela Hsu faceshot"
        />
        <summary>
          <header>
            <Typography component="p" variant="h5">
              Hi, I&apos;m
            </Typography>
            <Typography component="h1" variant="h2" fontWeight="bold">
              Angela Hsu
            </Typography>
          </header>
          <Box color="text.secondary">
            <TypingEffect text={[
              'a curious learner',
              'a professional problem-solver',
              'an empathetic listener',
              'a lifelong tree hugger',
              'a committed team member'
            ]} />
          </Box>
          <Box>
            <LinkedInIcon />
            <GitHubIcon />
          </Box>
          <section className={sectionStyles.content}>
            <p>I am a software engineer</p>
            <p>Curious, caring, and committed software professional with over 7 years in the industry, across quality, development, and DevOps teams, as both an individual contributor and team leader. Proven track record of delivering projects on time with a strong attention to quality and user experience. Interested in front-end or full-stack software engineering roles at an organization with a clear mission to address our current climate crisis, an issue I care about deeply.</p>
          </section>
        </summary>
      </section>

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

      <footer className={`${sectionStyles.footer} ${sectionStyles.dark}`}>
        <p className={sectionStyles.footerContent}>&copy; 2022 Angela Hsu</p>
      </footer>  
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
