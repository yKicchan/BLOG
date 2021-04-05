import React from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'
import Header from './Header'
import OGP from '~/components/ogp'
import Footer from './Footer'

interface P {
  meta: Meta
}

const Post: React.FC<P> = ({ meta, children }) => {
  const title = `${meta.title} - yKicchan's blog`
  const description = `${meta.excerpt}\n${meta.tags.join(', ')}`
  const path = `/posts/${meta.id}`

  return (
    <>
      <OGP meta={{ title, description, path }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header meta={meta} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer meta={meta} />
    </>
  )
}
export default Post
