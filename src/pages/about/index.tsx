import { NextPage } from 'next'
import React from 'react'
import Card from '~/components/atoms/Card'

import Layout from '~/components/layouts/Default'

const Page: NextPage = () => {
  return (
    <Layout>
      <Card>About</Card>
    </Layout>
  )
}

export default Page
