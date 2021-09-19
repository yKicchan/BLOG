import { AppProps } from 'next/app'
import { NextPage } from 'next'
import '~/styles/index.css'
import Layout from '~/components/layouts/Default'

import { config, library } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far, fas)

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
