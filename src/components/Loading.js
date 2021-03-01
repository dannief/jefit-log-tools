/** @jsx jsx */
import { jsx, Box, Heading, Flex, Text, Alert } from 'theme-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Heading sx={{ mb: 4 }}>Loading the log</Heading>
      <Text sx={{ fontSize: 4 }}>
        <FontAwesomeIcon icon='dumbbell' spin />
      </Text>
    </Flex>
  )
}
