import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SeasonsPageContent } from '../../components/domains/seasons/SeasonsPageContent'
import { MediaSeason } from '../../generated/graphql'

const SpringPage: NextPage<{}> = () => {
  const router = useRouter()
  const { year } = router.query

  if (typeof year === 'undefined') {
    return null
  }

  return <SeasonsPageContent season={MediaSeason.Spring} year={Math.floor(Number(year))} />
}

export default SpringPage
