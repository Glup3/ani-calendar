/** @jsxImportSource theme-ui */

import { FunctionComponent } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface CommonPageLayoutProps {
  title?: string
}

export const CommonPageLayout: FunctionComponent<CommonPageLayoutProps> = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 256,
      }}
    >
      <Header />

      {children}

      <Footer />
    </div>
  )
}
