import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface P {
  href?: string
  onClick?: () => void
  icon: IconProp
  label: string
  className?: string
}

const Icon: React.FC<P> = ({ icon, href, label, onClick, className }) => {
  const style = `${styles.component} ${className || ''}`
  if (href) {
    return (
      <a aria-label={label} href={href} className={style} target='_blank'>
        <span className={styles.iconWrapper}>
          <FontAwesomeIcon icon={icon} className={styles.svg} />
        </span>
      </a>
    )
  }

  return (
    <button aria-label={label} className={style} onClick={onClick}>
      <span className={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} className={styles.svg} />
      </span>
    </button>
  )
}

export default Icon
