import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '~/components/layouts/Default'
import { Metadata } from '*.mdx'
import { getAllMetadata } from '~/utils/meta'

interface P {
  metadataList: Metadata[]
}

const Page: NextPage<P> = ({ metadataList }) => {
  return (
    <Layout>
      <h1>Hello world!!</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {metadataList.map((meta) => (
          <li key={meta.path}>
            <Link href={meta.path}>
              <a>{meta.title}</a>
            </Link>
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
