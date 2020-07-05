import { NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Default'
import { Metadata } from '*.mdx'
import { getAllMetadata } from '~/utils/meta'
import Post from '~/components/organisms/Post'
import styles from './styles.module.scss'
import Head from 'next/head'
import OGP from '~/components/ogp'

interface P {
  metadata: Metadata[]
}

const Page: NextPage<P> = ({ metadata }) => {
  const latestMeta = metadata[0]
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
          {metadata.map((meta) => (
            <li key={meta.path}>
              <Post meta={meta} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const metadata = await getAllMetadata()
  return {
    props: {
      metadata,
    },
  }
}

export default Page
