import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { BackTop } from 'antd'
import { HEAD } from '../config'
import 'antd/dist/antd.css'
import '../global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={HEAD.meta.description} />
      <meta name="keywords" content={HEAD.meta.keywords} />
      <meta name="author" content={HEAD.meta.author} />
      <meta name="google-site-verification" content={HEAD.meta.googleVerification} />
      <meta property="og:url" content={HEAD.meta.ogURL} />
      <meta property="og:type" content={HEAD.meta.ogType} />
      <meta property="og:title" content={HEAD.meta.ogTitle} />
      <meta property="og:description" content={HEAD.meta.description} />
      <meta property="og:image" content={HEAD.meta.ogImage} />
    </Head>
    <BackTop />
    <Component {...pageProps} />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default App
