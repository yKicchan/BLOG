import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import Tag from '~/components/atoms/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '~/components/atoms/Card'

interface P {
  meta: Meta
}

const Post: React.FC<P> = ({ meta }) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${meta.id}`}>
      <a className={styles.link} aria-label={meta.title}>
        <Card tag="article" className={styles.component}>
          <h2 className={styles.title}>{meta.title}</h2>
          <time dateTime={meta.createdAt}>
            <span className={styles.iconWrapper}>
              <FontAwesomeIcon icon={['far', 'clock']} />
            </span>
            {meta.createdAt}
          </time>
          <p>{meta.excerpt}</p>
          <div className={styles.tags}>
            {meta.tags.map((tag) => (
              <Tag className={styles.tag} key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        </Card>
      </a>
    </Link>
  )
}

export default Post
