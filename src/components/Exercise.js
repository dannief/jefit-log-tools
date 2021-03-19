import React from 'react'
import { Flex, Box, Text } from 'theme-ui'
import { Link } from 'react-router-dom'
import Set from './Set'
import Measurement from './Measurement'

export default function Exercise({ exercise, showExerciseName = true }) {
  return (
    <Flex sx={{ flexDirection: 'column', mb: 3 }}>
      {showExerciseName ? (
        <Box sx={{ mb: 2 }}>
          <Text
            sx={{
              fontSize: 3,
              fontWeight: '600',
            }}
          >
            <Link to={'/history?exercise=' + exercise.exerciseName}>
              {exercise.exerciseName}
            </Link>
          </Text>
        </Box>
      ) : null}
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
          <Box sx={{ mb: 2 }}>
            <Measurement title='Volume' value={exercise.volume + ' lbs'} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Measurement title='1RM' value={exercise.oneRepMax} />
          </Box>
          {exercise.volume > 0 && showExerciseName ? (
            <Box>
              <Link to={'/overload?exercise=' + exercise.exerciseName}>
                Overload
                <br />
                Calculator
              </Link>
            </Box>
          ) : null}
        </Box>
      </Flex>
    </Flex>
  )
}
