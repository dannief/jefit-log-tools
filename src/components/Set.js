/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import React from 'react'

const setItemSx = {
  fontWeight: 'heading',
  textAlign: 'right',
  p: 2,
  m: 1,
}

export default function Set({ number, weight, reps, interval }) {
  return (
    <Flex sx={{ bg: 'muted' }}>
      <Box sx={{ ...setItemSx, width: '40px' }}>{number}.</Box>
      <Box sx={{ ...setItemSx, width: '70px' }}>{weight} lbs</Box>
      <Box sx={{ ...setItemSx, width: '70px' }}>{reps} reps</Box>
    </Flex>
  )
}
