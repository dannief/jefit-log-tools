import React from 'react'
import { Flex, Box, Text } from 'theme-ui'
import Set from './Set'
import Measurement from './Measurement'
import { useRecoilValue } from 'recoil'
import { exerciseVolume as exerciseVolumeState } from '../state'

export default function ({ exercise }) {
  const exerciseVolume = useRecoilValue(
    exerciseVolumeState({ exerciseName: exercise.exerciseName })
  )

  return <Exercise exercise={exercise} exerciseVolume={exerciseVolume} />
}

export function Exercise({ exercise, exerciseVolume }) {
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
              ></Set>
            )
          })}
        </Box>
        <Box sx={{ flex: '1 0 auto', ml: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Measurement title='Volume' value={exerciseVolume + ' lbs'} />
          </Box>
          <Box>
            <Measurement title='1RM' value={exercise.oneRepMax} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
