import React from 'react'
import styles from './styles.module.scss'

interface P {
  className?: string
  tag?: 'dl' | 'header' | 'article'
}

const Card: React.FC<P> = ({ children, className, tag }) => {
  const style = className || ''
  const Component = tag || 'div'
  return (
    <Component className={`${styles.component} ${style}`}>{children}</Component>
  )
}

export default Card
