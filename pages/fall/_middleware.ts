import { NextRequest } from 'next/server'
import { checkForYear } from '../../lib/seasonUtils'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  return checkForYear(pathname)
}
