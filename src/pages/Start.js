/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Input, Button } from 'theme-ui'
import React, { useCallback, useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import {
  currentUsername as currentUsernameState,
  currentDate as currentDateState,
} from '../state'
import Heading from '../components/Heading'
import history from '../utils/history'

export default function Log() {
  const currentUsername = useRecoilValue(currentUsernameState)
  const currentDate = useRecoilValue(currentDateState)

  const [username, setUsername] = useState(currentUsername)
  const [date, setDate] = useState(currentDate)

  const redirectToLogPage = useCallback(() => {
    history.push(`/log?username=${username}&date=${date}`)
  }, [date, username])

  return (
    <>
      <Heading name='Jefit Workout Logs' />
      <Box sx={{ mb: 3 }}>
        <Input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Input
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          sx={{ fontSize: 3 }}
        />
      </Box>
      <Box>
        <Button onClick={redirectToLogPage}>View Log</Button>
      </Box>
    </>
  )
}
