import { NextPage } from 'next'
import React from 'react'
import styles from './styles.module.scss'
import Layout from '~/components/layouts/Default'
import Profile from '~/components/organisms/Profile'

const Page: NextPage = () => {
  return (
    <Layout className={styles.component}>
      <Profile />
    </Layout>
  )
}

export default Page
