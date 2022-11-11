import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import { getSortedPostsData, getAllTags } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import blogStyles from '../../styles/blog.module.css';

type BlogHomeProps = {
  allPostsData: {
    created: string
    updated: string
    title: string
    id: string
    tags: string
  }[], 
  allTags: string[]
}

const BlogHome: NextPage = (props: BlogHomeProps) => {
  const { allPostsData, allTags } = props;

  return (
    <Container className={blogStyles.container}>
      <main className={blogStyles['main-left']}>

        <Typography variant="h2">Blog</Typography>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, created, updated, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                created <Date dateString={created} /> 
                updated <Date dateString={updated} />
              </small>
              <p className="my-0">
                {tags}
              </p>
            </li>
          ))}
        </ul>
      </main>

      <nav className={blogStyles['nav-right']}>
        <h2>Tags</h2>
        <ul className={utilStyles.list}>
          {allTags.map((tag) => (
            <li className={utilStyles.listItem} key={tag}>
              <Link href={`/blog/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allTags = getAllTags();
  return {
    props: {
      allPostsData,
      allTags
    }
  }
}

export default BlogHome;