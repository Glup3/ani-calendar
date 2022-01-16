import { MediaSeason } from '../generated/graphql'

export function isValidNumber(str: string): boolean {
  const parts = str.split('/')
  const year = Number(parts.pop())

  if (isNaN(year)) {
    return false
  }

  return true
}

export function getYearFromDate(date: Date): number {
  return date.getFullYear()
}

export function getSeasonFromDate(date: Date): MediaSeason {
  return getSeasonFromMonth(date.getMonth() + 1)
}

export function getSeasonFromMonth(month: number): MediaSeason {
  if ([12, 1, 2].includes(month)) {
    return MediaSeason.Winter
  }

  if ([3, 4, 5].includes(month)) {
    return MediaSeason.Spring
  }

  if ([6, 7, 8].includes(month)) {
    return MediaSeason.Summer
  }

  if ([9, 10, 11].includes(month)) {
    return MediaSeason.Fall
  }

  return getSeasonFromMonth(month % 12 || 12)
}

export interface SeasonYear {
  season: MediaSeason
  year: number
}

export function getUpcomingSeason(currentSeason: MediaSeason, currentYear: number): SeasonYear {
  let upcomingSeason = currentSeason
  let upcomingYear = currentYear

  switch (currentSeason) {
    case MediaSeason.Winter: {
      upcomingSeason = MediaSeason.Spring
      break
    }
    case MediaSeason.Spring: {
      upcomingSeason = MediaSeason.Summer
      break
    }
    case MediaSeason.Summer: {
      upcomingSeason = MediaSeason.Fall
      break
    }
    case MediaSeason.Fall: {
      upcomingSeason = MediaSeason.Winter
      upcomingYear = currentYear + 1
      break
    }
  }

  return { season: upcomingSeason, year: upcomingYear }
}

export function getUpcomingSeasons(seasons: SeasonYear[], count: number): SeasonYear[] {
  if (seasons.length === 0) {
    throw Error('No initial Season provided')
  }

  if (seasons.length < count) {
    const [lastItem] = seasons.slice(-1)
    return getUpcomingSeasons([...seasons, getUpcomingSeason(lastItem.season, lastItem.year)], count)
  }

  return seasons
}
