import React from 'react'
import Head from 'next/head'
import Header from '~/components/organisms/Header'
import styles from './styles.module.scss'
import Footer from '~/components/organisms/Footer'

interface P {
  className?: string
}

const Layout: React.FC<P> = ({ children, className }) => {
  const style = className || ''
  return (
    <>
      <Header />
      <main className={`${styles.content} ${style}`}>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
