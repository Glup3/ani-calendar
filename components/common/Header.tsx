/** @jsxImportSource theme-ui */

import { FunctionComponent } from 'react'
import { SeasonYear, getUpcomingSeasons, getSeasonFromDate, getYearFromDate } from '../../lib/seasonUtils'
import { NavLink } from './NavLink'

export const Header: FunctionComponent<{}> = () => {
  const today = new Date()
  const currentSeason: SeasonYear = { season: getSeasonFromDate(today), year: getYearFromDate(today) }
  const upcomingSeasons = getUpcomingSeasons([currentSeason], 4)

  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
      }}
    >
      <NavLink href="/" text="AniCalendar" />
      <div sx={{ mx: 'auto' }} />

      {upcomingSeasons.map((season) => {
        const lowerCaseName = season.season.toLowerCase()
        const displayName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)

        return (
          <NavLink
            key={`${lowerCaseName}-${season.year}`}
            href={`/${lowerCaseName}/${season.year}`}
            text={displayName}
          />
        )
      })}
    </header>
  )
}
