import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '~/components/layouts/Default'
import { getAllMetadata } from '~/utils/posts'
import Post from '~/components/organisms/Post'
import OGP from '~/components/ogp'
import { Metadata } from '*.mdx'
import styles from './styles.module.scss'

interface P {
  metaList: Metadata[]
}

const Page: NextPage<P> = ({ metaList }) => {
  const latestMeta = metaList[0]
  const title = "yKicchan's blog"
  const description = `Web エンジニアが気ままにアウトプットしてる技術ブログ。\n${
    latestMeta.title
  }\n${latestMeta.tags.join(', ')}`

  return (
    <>
      <OGP
        meta={{
          title,
          description,
          path: '/',
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <ul className={styles.posts}>
          {metaList.map((meta) => (
            <li key={meta.path}>
              <Post meta={meta} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<P> = async () => {
  const metaList = await getAllMetadata()
  return {
    props: {
      metaList,
    },
  }
}

export default Page
