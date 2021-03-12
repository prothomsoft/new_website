import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class SiteDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        return (
            <Html lang="pl-PL">
                <Head />
                <body>
                    {main}
                    <NextScript />
                </body>
            </Html>
        );
    }
}
