import React from 'react'
import { Flex, Box, Text } from 'theme-ui'
import Set from './Set'
import Measurement from './Measurement'

export default function ExerciseCompact({ exercise, exerciseVolume }) {
  return (
    <Flex sx={{ flexDirection: 'column', mb: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Text
          sx={{
            fontSize: 3,
            fontWeight: '600',
          }}
        >
          {exercise.exerciseName}
        </Text>
      </Box>
      <Flex>
        <Box sx={{ flex: '1 0 auto' }}>
          {exercise.sets.map((set, index) => {
            return (
              <Set
                key={index}
                number={index + 1}
                weight={set.weight}
                reps={set.reps}
                interval={set.interval}
                compact={true}
              ></Set>
            )
          })}
        </Box>
        <Box sx={{ flex: '1 0 auto', ml: 4 }}>
          <Box sx={{ mb: 4, bg: 'muted', p: 3, display: 'inline-block' }}>
            <Measurement title='Volume' value={exerciseVolume + ' lbs'} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
