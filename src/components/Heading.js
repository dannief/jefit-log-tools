/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'

export default function ({ name }) {
  return (
    <Box>
      <Text
        sx={{
          fontSize: 6,
          fontWeight: 'bold',
          mb: 4,
        }}
      >
        {name}
      </Text>
    </Box>
  )
}
