import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Hairstylist page" />
        <title>Sales Dashboard</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
