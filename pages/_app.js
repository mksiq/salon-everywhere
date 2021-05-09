import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Application developed to display a sales dashboard"
        />
        <title>Sales Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
