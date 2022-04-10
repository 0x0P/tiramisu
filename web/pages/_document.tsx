import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import Splash from './splash'
import Nav from './nav'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';




function MyApp()  {
  return ( 
  <Html>
    <Head >
    <link rel="apple-touch-icon" href="/tiramisu.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
    </Head>
    <body>
    <Main />
    <NextScript />
    </body>
  </Html> )
}

export default MyApp
