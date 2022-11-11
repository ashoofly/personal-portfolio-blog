import utilStyles from '../../../styles/utils.module.css'
import { getSortedPostsData, getAllTags } from '../../../lib/posts'
import Link from 'next/link'
import Date from '../../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import styles from '../../../styles/layout.module.css';

type TagProps = {
  tag: string,
  taggedPostsData: {
    created: string
    updated: string
    tags: string
    title: string
    id: string
  }[],
  allTags: string[]
}

const Tag: NextPage = (props: TagProps) => {
  const { tag, taggedPostsData: data, allTags } = props;
  return (

    <Box sx={{ padding: '20px', display: 'grid', gridTemplateColumns: '2fr 1fr'}}>
      <Box sx={{ gridColumn: '1 / 1'}}>
        <main>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Tag: {tag}</h2>
            <ul className={utilStyles.list}>
              {data.map(({ id, created, updated, title, tags }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/blog/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    created <Date dateString={created} /> 
                    updated <Date dateString={updated} />
                    tags {tags}
                  </small>
                </li>
              ))}
            </ul>
            <div className={styles.backToHome}>
              <Link href="/blog">← Back to Blog Home</Link>
            </div>
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

          //   <li key={t}>{t}</li>
          //   // <Link href={`/blog/tags/${t}`}>${t}</Link>
          // })}
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
  const paths = tags.map((tag: string) => ({
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