/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { logForCurrentUserState } from '../state'

export default function Log() {
  const { date } = useParams()
  const log = useRecoilValue(logForCurrentUserState(date))

  return (
    <>
      <div>
        {log.logs.length > 0
          ? log.sessionInfo.weightLifted.value
          : 'No workout'}
      </div>
    </>
  )
}
