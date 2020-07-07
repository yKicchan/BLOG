import React from 'react'
import styles from './styles.module.scss'

interface P {
  onClick?: () => void
  className?: string
  tag?: 'dl' | 'header' | 'article'
}

const Card: React.FC<P> = ({ children, onClick, className, tag }) => {
  const style = className || ''
  const Component = tag || 'div'
  return (
    <Component onClick={onClick} className={`${styles.component} ${style}`}>
      {children}
    </Component>
  )
}

export default Card
