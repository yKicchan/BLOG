import React from 'react'
import Head from 'next/head'
import Layout from '~/components/layouts/Default'
import styles from './styles.module.scss'
import { Metadata } from '*.mdx'
import Header from './Header'

interface P {
  meta: Metadata
}

const Post: React.FC<P> = ({ meta, children }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <Header meta={meta} />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-lang="en"
        data-via="yKicchan"
        data-size="large"
        data-show-count="false"
      >
        Tweet
      </a>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </footer>
  </Layout>
)

export default Post
