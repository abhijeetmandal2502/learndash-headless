import '@/styles/globals.css'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <>
    <RecoilRoot>
      <Head>Home</Head>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </RecoilRoot>
    </>
  )
}
