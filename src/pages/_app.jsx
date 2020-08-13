import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { HEAD } from '../config'
import 'antd/dist/antd.css'
import '../global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{HEAD.title}</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={HEAD.meta.description} />
      <meta name="keywords" content={HEAD.meta.keywords} />
      <meta name="author" content={HEAD.meta.author} />
      <meta name="google-site-verification" content={HEAD.meta.googleVerification} />
      {/* <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" /> */}
    </Head>
    <Component {...pageProps} />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default App
