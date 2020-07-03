import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '~/layouts/Default'

const Page: NextPage = () => (
  <Layout>
    <h1>Hello world!!</h1>
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/posts/test">Test</Link>
      </li>
    </ul>
  </Layout>
)

export default Page
