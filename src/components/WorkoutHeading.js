/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import React from 'react'
import RoutineName from './RoutineName'
import WorkoutDate from './WorkoutDate'

export default function WorkoutHeading({ routine, date }) {
  return (
    <Box>
      <RoutineName name={routine} />
      <WorkoutDate date={date} />
    </Box>
  )
}
