import React, { useRef } from 'react'
import styles from './styles.module.scss'
import Card from '~/components/atoms/Card'
import Tag from '~/components/atoms/Tag'
import { useIntersection } from '~/hooks/useIntersection'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface P {
  meta: Meta
}

const Header: React.FC<P> = ({ meta }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const intersection = useIntersection(ref)
  const time = meta.updatedAt || meta.createdAt
  const timeIcon: FontAwesomeIconProps['icon'] = meta.updatedAt ? ['fas', 'sync-alt'] : ['far', 'clock']
  const timeTitle = meta.updatedAt ? `公開: ${meta.createdAt}\n更新: ${meta.updatedAt}` : ''

  return (
    <>
      <Card tag="header" className={styles.component}>
       <h1 className={styles.title}>{meta.title}</h1>
        <p>
          <time className={styles.time} dateTime={time} title={timeTitle}>
            <FontAwesomeIcon icon={timeIcon} className={styles.timeIcon} />
            {time}
          </time>
        </p>
        <div className={styles.tags}>
          {meta.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
      <div ref={ref}>
        {/* スクロール固定ヘッダー表示判定用のダミー要素 */}
      </div>
      {!intersection &&
        <header className={styles.floatHeaderContainer}>
          <div className={styles.floatHeader}>
            <div className={styles.floatTitle} title={meta.title}>
              {meta.title}
            </div>
            <button className={styles.floatButton}>
              <FontAwesomeIcon icon={['fas', 'angle-down']} />
            </button>
          </div>
        </header>
      }
    </>
  )
}

export default Header
