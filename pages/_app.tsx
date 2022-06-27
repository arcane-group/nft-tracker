import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NFT Tracker</title>
      </Head>
      <Header />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
