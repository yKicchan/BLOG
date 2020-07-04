import React from 'react'
import styles from './styles.module.scss'
import Card from '~/components/atoms/Card'

const Profile: React.FC = () => {
  return (
    <Card className={styles.component}>
      <figure className={styles.imageWrapper}>
        <img src="/assets/profile.png" alt="profile" />
      </figure>
      <main className={styles.content}>
        <div>
          <h3 className={styles.name}>yKicchan</h3>
          <h4 className={styles.job}>Web engineer</h4>
        </div>
        <p className={styles.bio}>
          主な生息地は大阪。
          <br />
          声優の花澤香菜さんの大ファンで、たまにイベントに出没してます。
          <br />
          宗教上の理由により JavaScript を卒業し、TypeScript がメイン武器。
        </p>
      </main>
    </Card>
  )
}

export default Profile
