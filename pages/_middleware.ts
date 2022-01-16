import { NextRequest, NextResponse } from 'next/server'
import { getSeasonFromDate, getYearFromDate } from '../lib/seasonUtils'

export function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl

  // if (pathname === '/') {
  //   const today = new Date()
  //   const year = getYearFromDate(today)
  //   const season = getSeasonFromDate(today)

  //   return NextResponse.redirect(`/${season}/${year}`)
  // }

  return NextResponse.next()
}
