import React from 'react'
import styles from './styles.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-lang="en"
        data-via="yKicchan"
        data-size="large"
        data-show-count="false"
      >
        Tweet
      </a>
    </footer>
  )
}

export default Footer
