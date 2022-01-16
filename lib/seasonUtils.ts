// eslint-disable-next-line
import { NextResponse } from 'next/server'
import { MediaSeason } from '../generated/graphql'

export function checkForYear(str: string): NextResponse {
  const parts = str.split('/')
  const year = Number(parts.pop())

  if (isNaN(year)) {
    return NextResponse.rewrite('/404')
  }

  return NextResponse.next()
}

export function getYearFromDate(date: Date): number {
  return date.getFullYear()
}

export function getSeasonFromDate(date: Date): MediaSeason {
  const month = date.getMonth() + 1

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

  return MediaSeason.Winter
}
