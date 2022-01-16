import { FunctionComponent } from 'react'
import { Season } from '../../common/types/Season'

interface SeasonsPageContentProps {
  season: Season
  year: number
}

export const SeasonsPageContent: FunctionComponent<SeasonsPageContentProps> = ({ season, year }) => {
  return (
    <div>
      Seasons Page Content {season} {year}
    </div>
  )
}
