/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Input, Button, Label } from 'theme-ui'
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
    <Box as='form'>
      <Heading name='Jefit Workout Logs' />
      <Box sx={{ mb: 3 }}>
        <Label htmlFor='username'>Username</Label>
        <Input
          name='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Button
          as='a'
          href={
            'https://www.jefit.com/members/user-workout-routine/?xid=' +
            currentUsername
          }
        >
          View Routine
        </Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Label htmlFor='date'>Workout Date</Label>
        <Input
          name='date'
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          sx={{ fontSize: 3 }}
        />
      </Box>
      <Box>
        <Button onClick={redirectToLogPage}>View Log</Button>
      </Box>
    </Box>
  )
}
