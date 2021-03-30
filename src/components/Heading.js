/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function ({ name }) {
  return (
    <Box>
      <Text
        sx={{
          fontSize: 5,
          fontWeight: 'bold',
          mb: 4,
          color: 'primary',
        }}
      >
        {name}
      </Text>
    </Box>
  )
}
