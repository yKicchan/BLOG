import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Post'
import { getAllPosts, getPost } from '~/utils/posts'
import { ParsedUrlQuery } from 'node:querystring'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from '~/components/atoms/CodeBlock'
import styles from './styles.module.scss'

interface Props {
  post?: Post
}

const Post: NextPage<Props> = ({ post }) => {
  if (!post) return null
  return (
    <Layout meta={post.meta}>
      <ReactMarkdown
        className={styles.markdown}
        source={post.body}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
    </Layout>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) return { props: {} }

  const post = getPost(params.id)
  return {
    props: {
      post
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
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
