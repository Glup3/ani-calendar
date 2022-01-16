import { NextResponse } from 'next/server'
import { Season } from '../components/common/types/Season'

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

export function getSeasonFromDate(date: Date): Season {
  const month = date.getMonth() + 1

  if ([1, 2, 3].includes(month)) {
    return 'winter'
  }

  if ([4, 5, 6].includes(month)) {
    return 'spring'
  }

  if ([7, 8, 9].includes(month)) {
    return 'summer'
  }

  if ([10, 11, 12].includes(month)) {
    return 'fall'
  }

  return 'winter'
}
