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
          <SkillCard src="/assets/react.svg" alt="React" />
          <SkillCard src="/assets/angular.svg" alt="Angular" />
          <SkillCard src="/assets/vue.svg" alt="Vue.js" />
          <SkillCard src="/assets/typescript.svg" alt="TypeScript" />
          <SkillCard src="/assets/javascript.svg" alt="JavaScript" />
          <SkillCard src="/assets/go.svg" alt="Golang" />
          <SkillCard src="/assets/php.svg" alt="PHP" />
          <SkillCard src="/assets/laravel.svg" alt="Laravel" />
        </div>
      </Layout>
    </>
  )
}

export default Page
