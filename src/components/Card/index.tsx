import React from 'react'
import styles from './styles.module.scss'

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <main className={styles.content}>Content</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default Card
