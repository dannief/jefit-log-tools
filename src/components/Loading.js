/** @jsx jsx */
import { jsx, Heading, Flex, Text } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
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
