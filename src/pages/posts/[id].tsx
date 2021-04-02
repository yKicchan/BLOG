import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Post'
import { getAllPosts, getPost } from '~/utils/posts'
import { ParsedUrlQuery } from 'node:querystring'

interface Props {
  post?: Post
}

const Post: NextPage<Props> = ({ post }) => {
  if (!post) return null
  return <Layout {...post} />
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
