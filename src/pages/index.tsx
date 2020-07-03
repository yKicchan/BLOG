import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '~/layouts/Default'
import fs from 'fs'
import { Metadata } from '*.mdx'

const Page: NextPage<{ metadataList: Metadata[] }> = ({ metadataList }) => {
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
  const dir = '/src/pages/posts/'
  const files = fs.readdirSync(process.cwd() + dir)
  const mdxDocs = Promise.all(files.map((file) => import('./posts/' + file)))
  const metadataList = (await mdxDocs).map((mdx, i) => ({
    ...mdx.metadata,
    path: `/posts/${files[i].substring(0, files[i].indexOf('.'))}`,
  }))

  return {
    props: {
      metadataList,
    },
  }
}

export default Page
