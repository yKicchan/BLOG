import React from 'react'
import Head from 'next/head'
import Header from '~/components/Header'
import styles from './styles.module.scss'
import Footer from '~/components/Footer'

const Layout: React.FC = (props) => (
  <>
    <Head>
      <title>yKicchan</title>
    </Head>
    <Header />
    <main className={styles.content}>{props.children}</main>
    <Footer />
  </>
)

export default Layout
