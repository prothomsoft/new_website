import Head from 'next/head'

export default ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
)