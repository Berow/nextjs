import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
