import useMediaQuery from '@mui/material/useMediaQuery';

import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import {
  Box, Typography, List, ListItem, ListItemText
} from '@mui/material';
import { formatDateString, formatAbbrevDate } from '../date';
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
  const isMobile = useMediaQuery('(max-width:599px)');

  return (
    <section id="blogPreview" className={`${sectionStyles.container} ${sectionStyles.vertical} ${sectionStyles.third}`}>
      <header>
        <Typography variant="h3" className={isMobile ? utilStyles.h3mobile : ''} fontWeight="bold" align="center">
          <Link href="/blog" className={utils.linkNoHover}>Blog</Link>
        </Typography>
        <Typography component="p" align="center">
              Most Recent Posts
        </Typography>
      </header>
      <main className={sectionStyles.horizontalMargins}>
        <List aria-label="blog-posts" className={utils.list}>
          {posts.map(({ slug, created, updated, title }) => (
            <ListItem className={utils.listItem} key={slug}>
              <ListItemText 
                primary={<Link href={`/blog/posts/${slug}`}>{title}</Link>} 
                secondary={updated ? `${formatDateString(created)} (updated ${formatAbbrevDate(updated)})` : `${formatDateString(created)}`} 
              />
            </ListItem>
          ))}
        </List>     
    </main>
    </section>
  )
}