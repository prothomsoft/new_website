import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class SiteDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        return (
            <html lang="pl-PL">
                <Head></Head>
                <body>
                    {main}
                    <NextScript />
                </body>
            </html>
        );
    }
}
