import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from '~/components/layouts/Post'
import { getAllPosts, getPost } from '~/utils/posts'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from '~/components/atoms/CodeBlock'
import styles from './styles.module.scss'
import { ParsedUrlQuery } from 'querystring'

interface Props {
  post?: Post
  latestMetaList?: Meta[]
}

const Post: NextPage<Props> = ({ post, latestMetaList }) => {
  if (!post || !latestMetaList) return null
  return (
    <Layout meta={post.meta} latestMetaList={latestMetaList}>
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

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) return { props: {} }

  const post = getPost(params.id)
  const latestMetaList = getAllPosts()
    .filter((p) => p.meta.id !== params.id)
    .slice(0, 3)
    .map((p) => p.meta)

  return {
    props: {
      post,
      latestMetaList,
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
