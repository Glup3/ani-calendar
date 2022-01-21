import type { AppProps } from 'next/app'
import client from '../apollo-client'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../lib/theme'
import { CommonPageLayout } from '../components/common/CommonPageLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CommonPageLayout>
          <Component {...pageProps} />
        </CommonPageLayout>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
