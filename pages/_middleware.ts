import { NextResponse } from 'next/server'

export function middleware() {
  // const { pathname } = req.nextUrl

  // if (pathname === '/') {
  //   const today = new Date()
  //   const year = getYearFromDate(today)
  //   const season = getSeasonFromDate(today)

  //   return NextResponse.redirect(`/${season}/${year}`)
  // }

  return NextResponse.next()
}
