import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/fonts/NotoSansJP-Bold.otf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/NotoSansJP-Light.otf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/NotoSansJP-Regular.otf"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
