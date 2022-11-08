import Head from 'next/head';
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/layout.module.css';
import Box from '@mui/material/Box';

export default function Post({
  postData
}: {
  postData: {
    title: string
    created: string
    updated: string
    contentHtml: string
    tags: string
  }
}) {
  return (
    <Layout>
      <Box sx={{ padding:'20px' }}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            created: <Date dateString={postData.created} /> (updated: <Date dateString={postData.updated} />)
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div className={styles.backToHome}>
          <Link href="/blog">← Back to Blog Home</Link>
        </div>
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

