import { NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Post'
import { getAllPosts, getPost } from '~/utils/posts'
import { Meta } from '~/@types/meta'

interface P {
  meta: Meta
  body: string
}

const Post: NextPage<P> = ({ body, meta }) => {
  return <Layout meta={meta} body={body} />
}

interface Params {
  params: {
    id: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { meta, body } = getPost(params.id)
  return {
    props: {
      meta: meta,
      body: body,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { id: post.meta.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Post
