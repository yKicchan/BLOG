import React from 'react'
import styles from './styles.module.scss'

const Tag: React.FC = ({ children }) => {
  return <span className={styles.component}>{children}</span>
}

export default Tag
