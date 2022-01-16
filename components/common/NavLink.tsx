/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { FunctionComponent } from 'react'

interface NavLinkProps {
  href: string
  text: string
  isExternal?: boolean
}

export const NavLink: FunctionComponent<NavLinkProps> = ({ href, text, isExternal = false }) => {
  return isExternal ? (
    <a href={href} rel="noreferrer" target="_blank" sx={{ p: 2 }}>
      {text}
    </a>
  ) : (
    <Link href={href} passHref>
      <a sx={{ p: 2 }}>{text}</a>
    </Link>
  )
}
