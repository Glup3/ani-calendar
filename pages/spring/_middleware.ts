import { NextRequest, NextResponse } from 'next/server'
import { isValidNumber } from '../../lib/seasonUtils'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (!isValidNumber(pathname)) {
    return NextResponse.rewrite('/404')
  }

  return NextResponse.next()
}
