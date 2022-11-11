import Head from 'next/head';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { getSortedPostsData } from '../lib/posts';
import { siteTitle } from '../components/layouts/layout';
import Experience from '../components/sections/experience';
import Summary from '../components/sections/summary';
import Projects from '../components/sections/projects';
import BlogPreview from '../components/sections/blogPreview';

type HomeProps = {
  summary: string,
  mostRecentPostsData: {
    created: string
    updated: string
    title: string
    id: string
    tags: string
  }[], 
}

const Home: NextPage = (props: HomeProps) => {
  const { summary, mostRecentPostsData } = props;
  return (
    <>
      <Head><title>{siteTitle}</title></Head>
      <Summary content={summary} />
      <Projects />
      <Experience />
      <BlogPreview posts={mostRecentPostsData} />
    </>
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
