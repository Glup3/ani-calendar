import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SeasonsPageContent } from '../../components/domains/seasons/SeasonsPageContent'
import { MediaSeason } from '../../generated/graphql'

const SummerPage: NextPage<{}> = () => {
  const router = useRouter()
  const { year } = router.query

  if (typeof year === 'undefined') {
    return null
  }

  const yearNumber = Math.floor(Number(year))

  return (
    <>
      <Head>
        <title>AniCalendar Summer {yearNumber}</title>
      </Head>
      <SeasonsPageContent season={MediaSeason.Summer} year={yearNumber} />
    </>
  )
}

export default SummerPage
