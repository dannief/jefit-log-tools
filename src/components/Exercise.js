/** @jsxImportSource theme-ui */
import { useState } from 'react'
import { Flex, Box, Text, Card, Themed } from 'theme-ui'
import { Link } from 'react-router-dom'
import Set from './Set'
import Measurement from './Measurement'
import Notes from './Notes'

export default function Exercise({
  exercise,
  showExerciseName = true,
  onExerciseSelected,
}) {
  const [notesShown, showNotes] = useState(false)

  function handleShowNotes() {
    showNotes(true)
  }

  function handleHideNotes() {
    showNotes(false)
  }

  return (
    <>
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
              <Box sx={{ mb: 2 }}>
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
              <Box sx={{ mb: 2 }}>
                <Measurement
                  icon='chart-line'
                  title='Est. 1RM'
                  value={exercise.oneRepMax}
                />
              </Box>
              {exercise.notes && exercise.notes.length > 0 && (
                <Box>
                  <Themed.a as={Link} to='#' onClick={handleShowNotes}>
                    <Measurement icon='edit' title='Notes' value='' />
                  </Themed.a>
                </Box>
              )}
            </Box>
          </Flex>
        </Flex>
      </Card>
      <Notes
        notes={exercise.notes}
        open={exercise.notes && exercise.notes.length && notesShown}
        onClose={handleHideNotes}
      />
    </>
  )
}
