import React from 'react'
import styles from './styles.module.scss'

const Card: React.FC = ({ children }) => {
  return <div className={styles.component}>{children}</div>
}

export default Card
