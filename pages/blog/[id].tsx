import Head from 'next/head';
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths } from 'next';
import Date from '../../components/date';
import { getAllPostIds, getPostData, getAllTags } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/layout.module.css';
import Box from '@mui/material/Box';
import type { NextPage } from 'next'

type PostProps = {
  postData: {
    title: string
    created: string
    updated: string
    contentHtml: string
    tags: string[]
  },
  allTags: string[]
}

const Post: NextPage = (props: PostProps) => {
  const { postData, allTags } = props;
  return (
    <Box sx={{ padding: '20px', display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
    <Box sx={{ gridColumn: '1 / 1'}}>
      <main>
        <Box sx={{ padding:'20px' }}>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              created: <Date dateString={postData.created} /> (updated: <Date dateString={postData.updated} />)
            </div>
            <div className={utilStyles.list}>
              {postData.tags.map((tag) => (
                <Link key={tag} href={`/blog/tags/${tag}`}>{`    ${tag}      `}</Link>
              ))}
              </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <div className={styles.backToHome}>
            <Link href="/blog">← Back to Blog Home</Link>
          </div>
        </Box>      
      </main>
    </Box>
    <Box sx={{ gridColumn: '2 / 2'}}>
      <h2>Tags</h2>
      <ul className={utilStyles.list}>
          {allTags.map((tag) => (
            <li className={utilStyles.listItem} key={tag}>
              <Link href={`/blog/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
      </ul>
    </Box>
  </Box>


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
  const allTags = getAllTags();
  return {
    props: {
      postData,
      allTags
    }
  };
}

export default Post;