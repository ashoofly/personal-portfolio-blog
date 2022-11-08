import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'
import { Box } from '@mui/material'

export default function BlogHome({
  allPostsData
}: {
  allPostsData: {
    created: string
    updated: string
    title: string
    id: string
    tags: string
  }[]
}) {
  return (
    <Layout>
      <Box sx={{ padding: '20px' }}>
        <Head>
          <title>Angela Hsu - Blog</title>
        </Head>
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
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}