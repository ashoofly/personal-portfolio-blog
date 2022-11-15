import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { getSortedPostsData, getAllTags } from '../../lib/posts';
import { formatDateString } from '../../components/date';
import utils from '../../styles/utils.module.css';
import BlogLayout from '../../components/layouts/blogLayout';

type BlogHomeProps = {
  allPostsData: {
    slug: string,
    title: string,
    created: string,
    updated?: string,
    tags?: string[],
    content: string,
  }[], 
  allTags: {
    [tag: string]: number 
  }
}

const BlogHome: NextPage = (props: BlogHomeProps) => {
  const { allPostsData, allTags } = props;

  return (
    <BlogLayout allTags={allTags} home>
      <Typography variant="h3" className={utils.listTitle}>Blog</Typography>
      <List aria-label="blog-posts" className={utils.list}>
        {allPostsData.map(({ slug, created, updated, title }) => (
          <ListItem className={utils.listItem} key={slug}>
            <ListItemText 
              primary={<Link href={`/blog/posts/${slug}`}>{title}</Link>} 
              secondary={updated ? `${formatDateString(updated)} (updated)` : `${formatDateString(created)}`} 
            />
          </ListItem>
        ))}
      </List>
    </BlogLayout>
  );
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