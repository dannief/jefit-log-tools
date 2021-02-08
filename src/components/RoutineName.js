/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'

export default function RoutineName({ name }) {
  return (
    <Box>
      <Text
        sx={{
          fontSize: 6,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </Box>
  )
}
