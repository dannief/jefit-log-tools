/** @jsxImportSource theme-ui */
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Flex, Heading, Themed } from 'theme-ui'
import { logQuery } from '../state'
import Exercise from '../components/Exercise'
import Measurement from '../components/Measurement'
import Notes from '../components/Notes'
import history from '../utils/history'

export default function Log() {
  const log = useRecoilValue(logQuery())

  const [notesShown, showNotes] = useState(false)

  function handleShowNotes() {
    showNotes(true)
  }

  function handleHideNotes() {
    showNotes(false)
  }

  return (
    <>
      {log.notes && log.notes[''] && log.notes[''].length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Themed.a as='a' to='#' onClick={handleShowNotes}>
            <Measurement icon='edit' title='NOTES' value='' />
          </Themed.a>
        </Box>
      )}
      {log.exercises.length ? (
        log.exercises.map(ex => {
          return (
            <Exercise
              key={ex.exerciseName}
              exercise={ex}
              onExerciseSelected={exerciseName => {
                history.push('/History?exercise=' + exerciseName)
              }}
            ></Exercise>
          )
        })
      ) : (
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heading sx={{ /*color: 'crimson',*/ mt: 5 }}>No Log Found</Heading>
        </Flex>
      )}
      {log.notes && log.notes[''] && log.notes[''].length > 0 && (
        <Notes
          notes={log.notes['']}
          open={notesShown}
          onClose={handleHideNotes}
        />
      )}
    </>
  )
}
