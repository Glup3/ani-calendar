import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePageContent } from '../components/domains/home/HomePageContent'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AniCalendar</title>
      </Head>
      <HomePageContent />
    </>
  )
}

export default HomePage
