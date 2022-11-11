import utilStyles from '../../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../../lib/posts'
import Link from 'next/link'
import { formatDateString } from '../../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import type { NextPage } from 'next'
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import styles from '../../../styles/layout.module.css';
import BlogLayout from '../../../components/layouts/blogLayout';
import utils from '../../../styles/utils.module.css';
import blog from '../../../styles/blog.module.css';


type TagProps = {
  tag: string,
  taggedPostsData: {
    created: string
    updated: string
    tags: string
    title: string
    id: string
  }[],
  allTags: {
    [tag: string]: number 
  }
}

const Tag: NextPage = (props: TagProps) => {
  const { tag, taggedPostsData, allTags } = props;
  return (
    <BlogLayout allTags={allTags}>
      <Typography variant="h5" className={`${utils.listTitle} ${blog.tagTitle}`}>Tag: {tag}</Typography>
      <List aria-label="blog-posts" className={utils.list}>
        {taggedPostsData.map(({ id, created, updated, title }) => (
          <ListItem className={utils.listItem} key={id}>
            <ListItemText 
              primary={<Link href={`/blog/posts/${id}`}>{title}</Link>} 
              secondary={updated ? `${formatDateString(updated)} (updated)` : `${formatDateString(created)}`} 
            />
          </ListItem>
        ))}
      </List>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const taggedPostsData = getSortedPostsData(params?.tag as string);
  const allTags = getAllTags();
  return {
    props: {
      taggedPostsData,
      tag: params?.tag,
      allTags
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const paths = Object.keys(tags).map((tag: string) => ({
    params: {
      tag,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Tag;