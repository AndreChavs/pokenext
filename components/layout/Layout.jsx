import Header from './Header'
import Footer from './Footer'
//
import Head from 'next/head'

const Layout = ({children}) => {
  return <>
    <Head>
      <title>PokeNext - App</title>
      <meta name="description" content="PokeNext application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
      <main className='main-container'>{children}</main>
    <Footer />
  </>
}

export default Layout