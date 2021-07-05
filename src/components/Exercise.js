/** @jsxImportSource theme-ui */
import { Flex, Box, Text, Card, Themed } from 'theme-ui'
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
            <Themed.a
              as={Text}
              sx={{
                fontSize: 3,
                fontWeight: '600',
              }}
              onClick={() => {
                console.log('Selected: ', exercise.exerciseName)
                onExerciseSelected(exercise.exerciseName)
              }}
            >
              {exercise.exerciseName}
            </Themed.a>
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
                <Themed.a
                  as={Link}
                  to={'/volume?exercise=' + exercise.exerciseName}
                >
                  <Measurement
                    icon='dumbbell'
                    title='Volume'
                    value={exercise.volume + ' lbs'}
                  />
                </Themed.a>
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
