import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link
          type="text/css"
          media="all"
          href="/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/css/jquery.animatedheadline.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/css/plugins.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/css/style.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          media="all"
          href="/css/skins/yellow.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/css/styleswitcher.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
