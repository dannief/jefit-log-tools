/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import React from 'react'

const setItemSx = compact => {
  return {
    fontWeight: 'heading',
    textAlign: 'right',
    p: compact ? 0 : 2,
    m: compact ? 0 : 1,
  }
}

const containerSx = compact => {
  const sx = { mb: compact ? 1 : 2 }
  if (!compact) sx.bg = 'muted'
  return sx
}

export default function Set({ number, weight, reps, interval, compact }) {
  return (
    <Flex sx={{ flexDirection: 'column', ...containerSx(compact) }}>
      <Flex sx={{ flexDirection: 'row' }}>
        <Box sx={{ ...setItemSx(compact), width: '20px' }}>{number}.</Box>
        <Box sx={{ ...setItemSx(compact), width: '70px' }}>
          {weight > 0 && weight + 'lbs'}
        </Box>
        <Box sx={{ ...setItemSx(compact), width: '80px' }}>{reps} reps</Box>
      </Flex>
      {interval ? (
        <Box sx={{ ...setItemSx(compact), textAlign: 'left', mt: 0, pt: 0 }}>
          <Text sx={{ fontStyle: 'italic', display: 'inline-block', mr: 1 }}>
            Interval:
          </Text>
          {interval}
        </Box>
      ) : null}
    </Flex>
  )
}
