import { NextPage } from 'next'
import React from 'react'
import styles from './styles.module.scss'
import Layout from '~/components/layouts/Default'
import Profile from '~/components/organisms/Profile'
import SkillCard from '~/components/molecules/SkillCard'

const Page: NextPage = () => {
  return (
    <Layout>
      <h2 className={styles.profileTitle}>Profile</h2>
      <Profile />
      <h2 className={styles.skillsTitle}>Skills</h2>
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
  )
}

export default Page
