import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/Default'
import styles from './styles.module.scss'
import { Metadata } from '*.mdx'

interface P {
  meta: Metadata
}

const Post: React.FC<P> = ({ meta, children }) => (
  <Layout>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <main className={styles.main}>{children}</main>
  </Layout>
)

export default Post
