import React from 'react'
import styles from './styles.module.scss'
import Card from '~/components/atoms/Card'

interface P {
  src: string
  alt: string
}

const SkillCard: React.FC<P> = ({ src, alt }) => {
  return (
    <Card className={styles.component}>
      <dt>
        <img className={styles.img} src={src} alt={alt} />
      </dt>
      <dd>{alt}</dd>
    </Card>
  )
}

export default SkillCard
