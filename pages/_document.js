import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class SiteDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    const gaTrackingId = 'UA-55429380-1'
    return (
      <html lang="pl-PL">
        <Head>          
          {styleTags}
          <script async src='/static/gtag.js' />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){
              dataLayer.push(arguments)              
            }
            gtag('js', new Date())
            gtag('config', '${gaTrackingId}')
            window.gaTrackingId = '${gaTrackingId}';
          `}} />
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}