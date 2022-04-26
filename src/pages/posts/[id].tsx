import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '~/components/layouts/Post'
import { ParsedUrlQuery } from 'node:querystring'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '~/components/atoms/CodeBlock'
import styles from './styles.module.scss'
import contents, { Meta, Post } from '~/libs/api/contents'

interface Props {
  post?: Post
  latestMetaList?: Meta[]
}

const Post: NextPage<Props> = ({ post, latestMetaList }) => {
  if (!post || !latestMetaList) return null
  return (
    <Layout meta={post} latestMetaList={latestMetaList}>
      <ReactMarkdown
        className={styles.markdown}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <CodeBlock language={match[1]}>{children}</CodeBlock>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {post.body}
      </ReactMarkdown>
    </Layout>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) return { props: {} }

  const getResponse = await contents.get(params.id)
  const listResponse = await contents.list({
    limit: 3,
    filters: `id[not_equals]${params.id}`,
  })

  return {
    props: {
      post: getResponse,
      latestMetaList: listResponse.contents,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await contents.list()
  const paths = res.contents.map((post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Post
