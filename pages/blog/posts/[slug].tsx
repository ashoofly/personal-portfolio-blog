import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next';
import type { NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import { getAllPostIds, getPostData, getAllTags } from '../../../lib/posts';
import { formatDateString } from '../../../components/date';
import BlogLayout from '../../../components/layouts/blogLayout';
import blog from '../../../styles/blog.module.css';
import utilStyles from '../../../styles/utils.module.css';

type PostProps = {
  slug: string,
  frontMatter: {
    title: string
    created: string
    updated: string
    tags: string[]
  },
  mdxSource: MDXRemoteSerializeResult,
  allTags: {
    [tag: string]: number 
  }
}

function displayTags(tags: string[]) {
  return tags.sort().reduce((acc, tag, index) => {
    if (index < tags.length-1) {
      return [
        ...acc,
        <Link key={tag} href={`/blog/tags/${tag}`}>{tag}</Link>,
        ', '
      ]
    } else {
      return [
        ...acc,
        <Link key={tag} href={`/blog/tags/${tag}`}>{tag}</Link>
      ]
    }
  }, []);
}

const Post: NextPage = (props: PostProps) => {
  const { frontMatter, mdxSource, allTags } = props;
  const { title, created, updated, tags } = frontMatter;
  const isMobile = useMediaQuery('(max-width:599px)');

  return (
    <BlogLayout allTags={allTags}>
      <Typography variant="h4" className={isMobile ? utilStyles.h4mobile : ''} sx={{ marginBottom: '1rem'}}>{title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '0.95rem', margin: '0' }}>
        <span>{updated && `updated ${formatDateString(updated)}`}</span>
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
        {`created ${formatDateString(created)}`}</Typography>
      <Typography variant="subtitle2" sx={{ margin: '1rem 0', fontSize: '0.95rem'}}>
        <b>Tags:</b> {displayTags(tags)}
      </Typography>
      <Box className={blog.post}>
        <MDXRemote {...mdxSource} />
      </Box>
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const { frontMatter, content } = getPostData(slug as string);
  const mdxSource = await serialize(content);
  const allTags = getAllTags();
  return {
    props: {
      slug,
      frontMatter,
      mdxSource,
      allTags
    }
  }
}

export default Post;