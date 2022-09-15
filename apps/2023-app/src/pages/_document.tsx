import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import ColorThemeScript from '@lib/ColorThemeScript'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

class MyDocument extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <ColorThemeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
