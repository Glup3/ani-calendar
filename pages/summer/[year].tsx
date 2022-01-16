import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SeasonsPageContent } from '../../components/domains/seasons/SeasonsPageContent'
import { MediaSeason } from '../../generated/graphql'

const SummerPage: NextPage<{}> = () => {
  const router = useRouter()
  const { year } = router.query

  if (typeof year === 'undefined') {
    return null
  }

  return <SeasonsPageContent season={MediaSeason.Summer} year={Math.floor(Number(year))} />
}

export default SummerPage
