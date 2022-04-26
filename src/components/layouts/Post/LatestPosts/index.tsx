import React from 'react'
import styles from './styles.module.scss'
import Post from '~/components/organisms/Post'
import { Meta } from '~/libs/api/contents'

interface P {
  metaList: Meta[]
}

const LatestPosts: React.FC<P> = ({ metaList }) => {
  return (
    <section className={styles.component}>
      <h2 className={styles.title}>新着記事</h2>
      <ul className={styles.posts}>
        {metaList.map((meta) => (
          <li key={meta.id}>
            <Post meta={meta} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LatestPosts
