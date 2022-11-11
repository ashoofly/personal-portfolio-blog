import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
// import { ListItem } from '@material-ui/core';
import { getSortedPostsData, getAllTags } from '../../lib/posts';
import { formatDateString } from '../../components/date';
import utils from '../../styles/utils.module.css';
import blog from '../../styles/blog.module.css';
import BlogLayout from '../../components/layouts/blogLayout';

type BlogHomeProps = {
  allPostsData: {
    created: string
    updated?: string
    title: string
    id: string
    tags?: string
  }[], 
  allTags: {
    [tag: string]: number 
  }
}

const BlogHome: NextPage = (props: BlogHomeProps) => {
  const { allPostsData, allTags } = props;

  return (
    <BlogLayout allTags={allTags}>
      <Typography variant="h2" className={utils.listTitle}>Blog</Typography>
      <List aria-label="blog-posts" className={utils.list}>
        {allPostsData.map(({ id, created, updated, title }) => (
          <ListItem className={utils.listItem} key={id}>
            <ListItemText 
              primary={<Link href={`/blog/posts/${id}`}>{title}</Link>} 
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