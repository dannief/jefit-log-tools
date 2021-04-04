/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRecoilValue } from 'recoil'
import { logQuery } from '../state'
import Exercise from '../components/Exercise'
import history from '../utils/history'

export default function Log() {
  const log = useRecoilValue(logQuery())

  return (
    <>
      {log.exercises.map(ex => {
        return (
          <Exercise
            key={ex.exerciseName}
            exercise={ex}
            onExerciseSelected={exerciseName => {
              history.push('/History?exercise=' + exerciseName)
            }}
          ></Exercise>
        )
      })}
    </>
  )
}
