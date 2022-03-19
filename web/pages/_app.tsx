import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import Splash from './splash'
import Nav from './nav'
import Head from 'next/head';
import { useEffect } from 'react';




function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.setAttribute("theme", localStorage["theme"])
    })
  return ( 
  <>
    <Head >
      <title>tiramisu</title>
    <link rel="apple-touch-icon" href="/tiramisu.png" />
      <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
    </Head>
  <Nav />
<NextNprogress color="#000"  startPosition={0}  options={{ easing: 'ease', speed: 500 }} stopDelayMs={0} height={3} showOnShallow={true} />
  <Component {...pageProps} />
  </> )
}

export default MyApp
