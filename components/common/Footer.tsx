/** @jsxImportSource theme-ui */

import { FunctionComponent } from 'react'
import { NavLink } from './NavLink'

export const Footer: FunctionComponent<{}> = () => {
  return (
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        p: 2,
      }}
    >
      <NavLink href="/" text="Home" />
      <NavLink href="/about" text="About" />
      <NavLink href="https://github.com/Glup3/ani-calendar" isExternal={true} text="GitHub" />
      <div sx={{ mx: 'auto' }} />
      <div sx={{ p: 2 }}>© 2022 Glup3</div>
    </footer>
  )
}
