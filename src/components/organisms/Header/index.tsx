import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Icon from '../../atoms/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <header className={styles.component}>
      <Link href="/">
        <a className={styles.title}>BLOG</a>
      </Link>
      {isShow && (
        <div className={styles.menuContainer}>
          <nav className={styles.nav}>
            <Icon
              icon={['fas', 'times']}
              label="close"
              onClick={() => setIsShow(false)}
              className={styles.menu}
            />
            <ul className={styles.links}>
              <li className={styles.link}>
                <Link href="/">
                  <a onClick={() => setIsShow(false)}>TOP</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href="/about">
                  <a onClick={() => setIsShow(false)}>ABOUT</a>
                </Link>
              </li>
              <li className={styles.link}>
                <a
                  href="https://github.com/yKicchan/BLOG/blob/master/LICENSE.md"
                  target="_blank"
                >
                  LICENSE
                  <FontAwesomeIcon icon={['fas', 'external-link-alt']} className={styles.external}/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <Icon
        label="Menu"
        icon={['fas', 'bars']}
        onClick={() => setIsShow(true)}
        className={styles.menu}
      />
    </header>
  )
}

export default Header
