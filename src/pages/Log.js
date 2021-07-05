/** @jsxImportSource theme-ui */
import { useRecoilValue } from 'recoil'
import { Flex, Heading } from 'theme-ui'
import { logQuery } from '../state'
import Exercise from '../components/Exercise'
import history from '../utils/history'

export default function Log() {
  const log = useRecoilValue(logQuery())

  return (
    <>
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
    </>
  )
}
