import '@/styles/globals.css'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>Home</Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
