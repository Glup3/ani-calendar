import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SeasonsPageContent } from '../../components/domains/seasons/SeasonsPageContent'

const WinterPage: NextPage<{}> = () => {
  const router = useRouter()
  const { year } = router.query

  if (typeof year === 'undefined') {
    return null
  }

  return <SeasonsPageContent season='winter' year={Math.floor(Number(year))} />
}

export default WinterPage
