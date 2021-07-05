/** @jsxImportSource theme-ui */
import { Heading, Flex, Text } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        p: 2,
      }}
    >
      <Heading sx={{ mb: 4 }}>Loading the log</Heading>
      <Text sx={{ fontSize: 4 }}>
        <FontAwesomeIcon icon='dumbbell' spin />
      </Text>
    </Flex>
  )
}
