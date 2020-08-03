import { NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Post'
import { getAllPosts, getPost } from '~/utils/posts'
import { Meta } from '~/@types/meta'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from '~/components/atoms/CodeBlock'

interface P {
  meta: Meta
  body: string
}

const Post: NextPage<P> = ({ body, meta }) => {
  return (
    <Layout meta={meta}>
      <ReactMarkdown
        source={body}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
    </Layout>
  )
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
