import React, { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Flex, Box, Button } from 'theme-ui'
import Heading from '../components/Heading'
import ExerciseCompact from '../components/ExerciseCompact'
import ExerciseOverload from '../components/ExerciseOverload'
import ExerciseVolumeEditor from '../components/ExerciseVolumeEditor'
import {
  logQuery,
  exerciseVolume,
  currentExerciseName as currentExerciseNameState,
} from '../state'
import { getExerciseSummary } from '../utils/logFunctions'

export default function Overload() {
  const log = useRecoilValue(logQuery())
  const currentExerciseName = useRecoilValue(currentExerciseNameState)
  const currentExerciseVolume = useRecoilValue(
    exerciseVolume({ exerciseName: currentExerciseName })
  )

  const [currentExercise, setCurrentExercise] = useState(
    getCurrentExercise(currentExerciseName)
  )
  const [exerciseSummary, setExerciseSummary] = useState(
    getExerciseSummary(currentExercise.sets)
  )
  const [tab, setTab] = useState('suggest')

  useEffect(() => {
    setCurrentExercise(getCurrentExercise(currentExerciseName))
  }, [currentExerciseName, log])

  useEffect(() => {
    setExerciseSummary(getExerciseSummary(currentExercise.sets))
  }, [currentExercise])

  function getCurrentExercise(exerciseName) {
    return log.exercises.find(ex => ex.exerciseName === exerciseName)
  }

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading name='Overload Calculator' />
      <ExerciseCompact
        exercise={currentExercise}
        exerciseVolume={currentExerciseVolume}
      />
      <Flex sx={{ mb: 1 }}>
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
          <ExerciseOverload
            exercise={currentExercise}
            exerciseVolume={currentExerciseVolume}
          />
        ) : null}
        {tab === 'calculate' ? (
          <ExerciseVolumeEditor overloadOpt={exerciseSummary} />
        ) : null}
      </Box>
    </Flex>
  )
}
