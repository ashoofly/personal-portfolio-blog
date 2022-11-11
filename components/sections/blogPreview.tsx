import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import {
  Box, Typography
} from '@mui/material';

type BlogPreviewProps = {
  posts: {
    created: string
    updated: string
    title: string
    id: string
    tags: string
  }[]
}

export default function BlogPreview(props: BlogPreviewProps) {
  const { posts } = props;
  return (
    <Box sx={{ padding: '50px 80px'}}>
      <header>
        <Typography component="h2" variant="h3" fontWeight="bold" align="center">
              Blog
        </Typography>
        <Typography component="p" align="center">
              Most Recent Posts
        </Typography>
      </header>
      <main style={{ paddingTop: '50px'}}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {posts.map(({ id, created, updated, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                created <Date dateString={created} /> 
                updated <Date dateString={updated} />
              </small>
            </li>
          ))}
        </ul>
      </section>        
    </main>
    </Box>
  )
}