import { AppProps } from 'next/app'
import React from 'react'
import '~/styles/index.css'
import Layout from '~/components/layouts/Default'

import { config, library } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faGithub, faClock)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
