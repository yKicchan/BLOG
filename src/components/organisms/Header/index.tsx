import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Icon from '../../atoms/Icon'

const Header: React.FC = () => {
  return (
    <header className={styles.component}>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>Top</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <Icon icon={['fab', 'twitter']} href="https://twitter.com/yKicchan" />
        <Icon icon={['fab', 'github']} href="https://github.com/yKicchan" />
      </div>
    </header>
  )
}

export default Header
