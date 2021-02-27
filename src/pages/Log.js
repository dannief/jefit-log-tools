/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box } from 'theme-ui'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { logForCurrentUserState } from '../state'
import Json from 'react-json-view'

export default function Log() {
  const { date } = useParams()

  const log = useRecoilValue(logForCurrentUserState(date))

  return (
    <>
      <div>{log ? <Json src={log} /> : 'No workout'}</div>
    </>
  )
}
