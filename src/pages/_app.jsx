import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import '../global.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>@Phumoonlight</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="phumoonlight profile" />
      <meta name="keywords" content="phumoonlight" />
      <meta name="author" content="Poosarn Moolmuang" />
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
