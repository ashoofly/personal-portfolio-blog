import Head from 'next/head';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { getSortedPostsData } from '../lib/posts';
import { siteTitle } from '../components/layouts/layout';
import Experience from '../components/sections/experience';
import Summary from '../components/sections/summary';
import Projects from '../components/sections/projects';
import BlogPreview from '../components/sections/blogPreview';
import { Container } from '@mui/material';
import utils from '../styles/utils.module.css';

type HomeProps = {
  summary: string,
  mostRecentPostsData: {
    created: string
    updated: string
    title: string
    slug: string
    tags: string
  }[], 
}

const Home: NextPage = (props: HomeProps) => {
  const { summary, mostRecentPostsData } = props;
  return (
    <Container className={utils.container}>
      <Head><title>{siteTitle}</title></Head>
      <Summary />
      <Projects />
      <Experience />
      <BlogPreview posts={mostRecentPostsData} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mostRecentPostsData = getSortedPostsData(null, 3);
  return {
    props: {
      mostRecentPostsData
    }
  };
}

export default Home;
