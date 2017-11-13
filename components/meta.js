import Head from 'next/head'

export default ({ title, description, keywords, url }) => (
    <Head>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="fb:admins" content="100009169832701" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="99FOTO.PL - Fotograf ślubny Kraków" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_pl" />
        <meta name="google-site-verification" content="googleae6b638c494b138d" />
        <link rel="author" href="https://plus.google.com/u/0/+TomaszProkop_99FOTO" />
        <link rel="publisher" href="https://plus.google.com/u/0/+TomaszProkop_99FOTO" />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
)