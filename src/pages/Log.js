/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box } from 'theme-ui'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { logQuery } from '../state'
import Json from 'react-json-view'
import Exercise from '../components/Exercise'

export default function Log() {
  const log = useRecoilValue(logQuery())

  return (
    <>
      {log.exercises.map(ex => {
        return <Exercise key={ex.exerciseName} exercise={ex}></Exercise>
      })}
      <Box>{log ? <Json src={log} /> : 'No workout'}</Box>
    </>
  )
}
