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
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap"
            rel="stylesheet"
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
