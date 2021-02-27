/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Input, Button } from 'theme-ui'
import React, { useCallback, useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useHistory, generatePath } from 'react-router-dom'
import { currentUsernameState } from '../state'
import Heading from '../components/Heading'
import subDays from 'date-fns/subDays'
import { formatDate } from '../utils'

export default function Log() {
  // TODO: Add to container component
  const [currentUsername, setCurrentUsername] = useRecoilState(
    currentUsernameState
  )
  const [username, setUsername] = useState(currentUsername)
  const [date, setDate] = useState(formatDate(subDays(new Date(), 7)))

  let history = useHistory()

  const redirectToLogPage = useCallback(() => {
    setCurrentUsername(username)
    history.push(generatePath('/log/:date', { date: date }))
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
