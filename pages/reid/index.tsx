// 4businessmen/pages/reid/index.tsx
import React from 'react'
import { NextPage } from 'next'
import { IntlProvider } from 'react-intl'
import Head from 'next/head'
import Layout from '../../components/Layout/LayoutPromo'
import Russian from '../../assets/translations/ru.json'

import '@nextcss/reset'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

import globalStyle from './global.module.scss'

import Header from './header/Header'
import Intro from './intro/Intro'
import Way from './way/way'
import You from './you/You'
import Streaming from './streaming/Streaming'
import Learn from './learn/Learn'
import Instruction from './instruction/Instruction'
import Questions from './Questions'
import CallButton from '../../components/CallButton/CallButton'

const Page: NextPage = () => {
  return (
    <IntlProvider locale='ru' messages={Russian} defaultLocale='ru'>
      <Layout>
        <Head>
          <title>ArkadiGroup - Degh.am</title>
          <meta
            name='description'
            content='Ներմուծում ենք բարձրորակ հակաքաղցկեղային դեղամիջոցներ աշխարհի լավագույն արտադրողներից:'
          />
        </Head>
        <div className={globalStyle['streamer-root']}>
          <Header />
          <main>
            <Intro />
            <Way />
            <You />
            <Streaming />
            <Learn />
            <Instruction />
            <Questions />
          </main>
          <CallButton />
        </div>
      </Layout>
    </IntlProvider>
  )
}

export default Page