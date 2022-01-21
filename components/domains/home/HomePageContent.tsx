/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react'
import { Box, Container, Text } from 'theme-ui'

export const HomePageContent: FunctionComponent<{}> = () => {
  return (
    <Container p={4}>
      <h1>Welcome to AniCalendar</h1>
      <Box>
        <Text>This is still in progress.</Text>
      </Box>
    </Container>
  )
}
