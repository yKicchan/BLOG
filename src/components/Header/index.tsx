import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <div>This is Header</div>
      </header>
    </>
  )
}

export default Header
