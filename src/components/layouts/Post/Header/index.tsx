import React from 'react'
import styles from './styles.module.scss'
import Card from '~/components/atoms/Card'
import Tag from '~/components/atoms/Tag'
import { Meta } from '~/@types/meta'

interface P {
  meta: Meta
}

const Header: React.FC<P> = ({ meta }) => {
  return (
    <Card tag="header" className={styles.component}>
      <h1>{meta.title}</h1>
      <p>
        <time className={styles.time} dateTime={meta.createdAt}>
          {meta.createdAt}
        </time>
        {meta.updatedAt && (
          <time
            className={`${styles.time} ${styles.note}`}
            dateTime={meta.updatedAt}
          >
            最終更新日: {meta.updatedAt}
          </time>
        )}
      </p>
      <div className={styles.tags}>
        {meta.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Card>
  )
}

export default Header
