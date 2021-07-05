/** @jsxImportSource theme-ui */
import { Box, Text } from 'theme-ui'
import React from 'react'

const Heading = function ({ name }) {
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

export default Heading
