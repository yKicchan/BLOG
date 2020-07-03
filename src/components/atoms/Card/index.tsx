import React from 'react'
import styles from './styles.module.scss'

interface P {
  className?: string
}

const Card: React.FC<P> = ({ children, className }) => {
  const style = className || ''
  return <div className={`${styles.component} ${style}`}>{children}</div>
}

export default Card
