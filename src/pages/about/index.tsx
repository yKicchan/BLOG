import { NextPage } from 'next'
import React from 'react'
import styles from './styles.module.scss'
import Layout from '~/components/layouts/Default'
import Profile from '~/components/organisms/Profile'
import SkillCard from '~/components/molecules/SkillCard'
import Head from 'next/head'
import OGP from '~/components/ogp'

const Page: NextPage = () => {
  const title = "About | yKicchan's blog"
  const description =
    'Web engineer.\n主な生息地は大阪。\n声優の花澤香菜さんの大ファンで、たまにイベントに出没してます。\n宗教上の理由により JavaScript を卒業し、TypeScript がメイン武器。'
  const path = '/about'

  return (
    <>
      <OGP meta={{ title, description, path }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <h2 className={styles.profileTitle}>Author</h2>
        <Profile />
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skills}>
          <SkillCard src="/assets/react.svg" alt="React" level="ﾁｮｯﾄﾃﾞｷﾙ(嘘)" />
          <SkillCard
            src="/assets/angular.svg"
            alt="Angular"
            level="完全に理解した"
          />
          <SkillCard src="/assets/vue.svg" alt="Vue.js" level="ふつう" />
          <SkillCard
            src="/assets/typescript.svg"
            alt="TypeScript"
            level="型パズル初心者です"
          />
          <SkillCard
            src="/assets/javascript.svg"
            alt="JavaScript"
            level="6年くらい"
          />
          <SkillCard src="/assets/go.svg" alt="Golang" level="Goはいいぞ。" />
          <SkillCard src="/assets/php.svg" alt="PHP" level="4年くらい" />
          <SkillCard
            src="/assets/laravel.svg"
            alt="Laravel"
            level="半年くらい"
          />
        </div>
      </Layout>
    </>
  )
}

export default Page
