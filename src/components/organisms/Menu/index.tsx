import React from 'react'
import styles from './styles.module.scss'
import Icon from '~/components/atoms/Icon'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface P {
  onClose: () => void
}

const Menu: React.FC<P> = ({ onClose }) => {
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <Icon
          icon={['fas', 'times']}
          label="close"
          onClick={onClose}
          className={styles.close}
        />
      </header>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/">
              <a onClick={onClose}>TOP</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <a onClick={onClose}>ABOUT</a>
            </Link>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/yKicchan/BLOG/blob/master/LICENSE.md"
              target="_blank"
            >
              LICENSE
              <FontAwesomeIcon
                icon={['fas', 'external-link-alt']}
                className={styles.external}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
