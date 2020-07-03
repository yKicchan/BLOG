import { NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Default'
import { Metadata } from '*.mdx'
import { getAllMetadata } from '~/utils/meta'
import Post from '~/components/organisms/Post'
import styles from './styles.module.scss'

interface P {
  metadataList: Metadata[]
}

const Page: NextPage<P> = ({ metadataList }) => {
  return (
    <Layout>
      <ul className={styles.posts}>
        {metadataList.map((meta) => (
          <li key={meta.path}>
            <Post meta={meta} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const metadataList = await getAllMetadata()
  return {
    props: {
      metadataList,
    },
  }
}

export default Page
