import React from 'react'
import Reset from '../assets/styles/reset'
import Normalize from '../assets/styles/normalize'
import GlobalStyle from '../assets/styles/globalStyle'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Reset />
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
