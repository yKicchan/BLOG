import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface P {
  href: string
  icon: IconProp
  label: string
}

const Icon: React.FC<P> = ({ icon, href, label }) => {
  return (
    <a aria-label={label} href={href} className={styles.component}>
      <span className={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </a>
  )
}

export default Icon
