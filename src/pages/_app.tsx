import { AppProps } from 'next/app'
import React from 'react'
import '~/styles/index.css'

import { config, library } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faGithub)

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
