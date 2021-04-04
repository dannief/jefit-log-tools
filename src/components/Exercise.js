/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Flex, Box, Text, Card } from 'theme-ui'
import { Link } from 'react-router-dom'
import Set from './Set'
import Measurement from './Measurement'

export default function Exercise({
  exercise,
  showExerciseName = true,
  onExerciseSelected,
}) {
  return (
    <Card sx={{ mb: 3 }}>
      <Flex sx={{ flexDirection: 'column' }}>
        {showExerciseName ? (
          <Box sx={{ mb: 2 }}>
            <Text
              sx={{
                fontSize: 3,
                fontWeight: '600',
                color: 'secondaryDark',
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log('Selected: ', exercise.exerciseName)
                onExerciseSelected(exercise.exerciseName)
              }}
            >
              {exercise.exerciseName}
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
            <Box sx={{ mb: 4 }}>
              {exercise.volume > 0 && showExerciseName ? (
                <Link
                  to={'/overload?exercise=' + exercise.exerciseName}
                  sx={{ textDecoration: 'none' }}
                >
                  <Measurement
                    icon='dumbbell'
                    title='Volume'
                    titleColor='accentLight'
                    value={exercise.volume + ' lbs'}
                  />
                </Link>
              ) : (
                <Measurement
                  icon='dumbbell'
                  title='Volume'
                  value={exercise.volume + ' lbs'}
                />
              )}
            </Box>
            <Box>
              <Measurement
                icon='chart-line'
                title='1RM'
                value={exercise.oneRepMax}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Card>
  )
}
