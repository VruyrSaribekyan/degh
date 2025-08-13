import React from 'react'
import getConfig from 'next/config'
import Script from 'next/script'


interface Props {
  children?: React.ReactNode
}


const LayoutPromo: React.FC<Props> =
    ({ children }) => (
        <div>
          <Script
            id='lazysizes'
            strategy='afterInteractive'
            src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
          />
          {children}
        </div>
      )

export default LayoutPromo;
