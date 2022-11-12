import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import {
  Box, Typography, List, ListItem, ListItemText
} from '@mui/material';
import { formatDateString } from '../date';
import utils from '../../styles/utils.module.css';
import sectionStyles from '../../styles/section.module.css';

type BlogPreviewProps = {
  posts: {
    created: string
    updated?: string
    title: string
    slug: string
    tags?: string
  }[]
}

export default function BlogPreview(props: BlogPreviewProps) {
  const { posts } = props;
  return (
    <Box sx={{ padding: '50px 80px'}} className={sectionStyles.third}>
      <header>
        <Typography component="h2" variant="h3" fontWeight="bold" align="center">
              Blog
        </Typography>
        <Typography component="p" align="center">
              Most Recent Posts
        </Typography>
      </header>
      <main style={{ paddingTop: '50px'}}>
        <List aria-label="blog-posts" className={utils.list}>
          {posts.map(({ slug, created, updated, title }) => (
            <ListItem className={utils.listItem} key={slug}>
              <ListItemText 
                primary={<Link href={`/blog/posts/${slug}`}>{title}</Link>} 
                secondary={updated ? `${formatDateString(updated)} (updated)` : `${formatDateString(created)}`} 
              />
            </ListItem>
          ))}
        </List>     
    </main>
    </Box>
  )
}