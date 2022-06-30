import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"
import type { AppProps } from "next/app"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoralisProvider
        serverUrl='https://zl3osbxqnomg.usemoralis.com:2053/server'
        appId='00zY2iOJn9xO1gcQrjmJbpqAIvbJcKurl23RGnI9'
      >
        <Head>
          <title>NFT Tracker</title>
        </Head>
        <Header />
        <Component {...pageProps} />;
      </MoralisProvider>
    </>
  )
}

export default MyApp
