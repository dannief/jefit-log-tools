/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'
import { parse, format } from 'date-fns'

export default function WorkoutDate({ date }) {
  const formattedDate = format(parse(date, 'yyyy-MM-dd', new Date()), 'EEEE, MMMM d, yyyy')
  return (
    <Box>
      <Text
        sx={{
          fontSize: 1,
          fontWeight: 'bold',
        }}>
        {formattedDate}
      </Text>
    </Box>
  )
}
