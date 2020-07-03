import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface P {
  href: string
  icon: IconProp
}

const Icon: React.FC<P> = ({ icon, href }) => {
  return (
    <a href={href} className={styles.component}>
      <span className={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  )
}

export default Icon
