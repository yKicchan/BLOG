import React from 'react'
import Head from 'next/head'
import Layout from '~/components/layouts/Default'
import styles from './styles.module.scss'
import { Metadata } from '*.mdx'
import Header from './Header'
import OGP from '~/components/ogp'
import Footer from './Footer'

interface P {
  meta: Metadata
}

const Content: React.FC<P> = ({ meta, children }) => {
  const title = `${meta.title} | yKicchan's blog`
  const description = `${meta.excerpt}\n${meta.tags.join(', ')}`

  return (
    <Layout>
      <OGP meta={{ title, description, path: meta.path }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <Header meta={meta} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Layout>
  )
}
export default Content
