/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Flex, Box } from 'theme-ui'
import Heading from '../components/Heading'
import ExerciseCompact from '../components/ExerciseCompact'
// import ExerciseConfigGenerator from '../components/ExerciseConfigGenerator'
// import ExerciseVolumeEditor from '../components/ExerciseVolumeEditor'
import ExerciseConfigEditor from '../components/ExerciseConfigEditor'
import {
  logQuery,
  currentExerciseName as currentExerciseNameState,
} from '../state'
// import { getExerciseSummary } from '../utils/logFunctions'

function getCurrentExercise(log, exerciseName) {
  return log.exercises.find(ex => ex.exerciseName === exerciseName)
}

export default function Volume() {
  const log = useRecoilValue(logQuery())
  const currentExerciseName = useRecoilValue(currentExerciseNameState)

  const [currentExercise, setCurrentExercise] = useState(
    getCurrentExercise(log, currentExerciseName)
  )
  // const [exerciseSummary, setExerciseSummary] = useState(
  //   getExerciseSummary(currentExercise.sets)
  // )
  // const [tab, setTab] = useState('suggest')

  useEffect(() => {
    setCurrentExercise(getCurrentExercise(log, currentExerciseName))
  }, [currentExerciseName, log])

  // useEffect(() => {
  //   setExerciseSummary(getExerciseSummary(currentExercise.sets))
  // }, [currentExercise])

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading name='Overload Calculator' />
      <ExerciseCompact exercise={currentExercise} />
      {/* <Flex sx={{ mb: 1 }}>
        <Button
          variant={tab !== 'suggest' ? 'primary' : 'muted'}
          sx={{ mr: 2 }}
          onClick={e => setTab('suggest')}
        >
          Suggest
        </Button>
        <Button
          variant={tab !== 'calculate' ? 'primary' : 'muted'}
          onClick={e => setTab('calculate')}
        >
          Calculate
        </Button>
      </Flex>
      <Box sx={{ bg: 'gray.1', p: 2, borderRadius: 4 }}>
        {tab === 'suggest' ? (
          <ExerciseConfigGenerator exercise={currentExercise} />
        ) : null}
        {tab === 'calculate' ? (
          <ExerciseVolumeEditor
            overloadOpt={exerciseSummary}
            exerciseVolume={currentExercise.volume}
          />
        ) : null}
      </Box> */}
      <Box>
        <ExerciseConfigEditor exercise={currentExercise} />
      </Box>
    </Flex>
  )
}
