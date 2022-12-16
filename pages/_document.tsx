import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#ff3535" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
