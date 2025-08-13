import React from 'react'
import Reset from '../assets/styles/reset'
import Normalize from '../assets/styles/normalize'
import GlobalStyle from '../assets/styles/globalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
