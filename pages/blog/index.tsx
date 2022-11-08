import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import {
  Box
} from '@mui/material';

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
    <Box sx={{ padding: '20px', display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <Box sx={{ gridColumn: '1 / 1'}}>
        <main>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, created, updated, title, tags }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/blog/${id}`}>{title}</Link>
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
        </section>        
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