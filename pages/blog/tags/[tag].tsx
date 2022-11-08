import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData, getTags } from '../../../lib/posts'
import Link from 'next/link'
import Date from '../../../components/date'
import { GetStaticProps } from 'next'
import { Box } from '@mui/material'

export default function BlogTag({
  allPostsData
}: {
  allPostsData: {
    created: string
    updated: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Box sx={{ padding: '20px' }}>
        <Head>
          <title>Angela Hsu - Blog</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Tags</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, created, updated, title }) => (
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
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = await getSortedPostsData(params.tag)
  return {
    props: {
      allPostsData,
      title: `Blog Posts - ${params.tag}`,
      description: `Posts on tag ${params.tag}`,
      tag: params.tag,
    }
  }
}

export async function getStaticPaths() {
  const tags = await getTags('blog')

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