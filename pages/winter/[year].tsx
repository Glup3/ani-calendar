import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SeasonsPageContent } from '../../components/domains/seasons/SeasonsPageContent'
import { MediaSeason } from '../../generated/graphql'

const WinterPage: NextPage<{}> = () => {
  const router = useRouter()
  const { year } = router.query

  if (typeof year === 'undefined') {
    return null
  }

  return <SeasonsPageContent season={MediaSeason.Winter} year={Math.floor(Number(year))} />
}

export default WinterPage
