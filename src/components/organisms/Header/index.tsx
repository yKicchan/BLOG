import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Icon from '../../atoms/Icon'
import Menu from '~/components/organisms/Menu'

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <header className={styles.component}>
      <Link href="/">
        <a className={styles.title}>BLOG</a>
      </Link>
      {isShow && <Menu onClose={() => setIsShow(false)} />}
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
