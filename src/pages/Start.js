/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Container, Input, Button } from 'theme-ui'
import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { useHistory, generatePath } from 'react-router-dom'
import { currentUsernameState, currentDateState } from '../state'
import Heading from '../components/Heading'

export default function Log() {
  const [currentUsername, setCurrentUsername] = useRecoilState(
    currentUsernameState
  )
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState)

  let history = useHistory()

  const redirectToLogPage = useCallback(() => {
    history.push(generatePath('/log/:date', { date: currentDate }))
  }, [currentDate])

  return (
    <>
      <Heading name='Jefit Workout Logs' />
      <Box sx={{ mb: 3 }}>
        <Input
          type='text'
          value={currentUsername}
          onInput={e => setCurrentUsername(e.target.value)}
        />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Input
          type='date'
          value={currentDate}
          onInput={e => setCurrentDate(e.target.value)}
        />
      </Box>
      <Box>
        <Button onClick={redirectToLogPage}>View Log</Button>
      </Box>
    </>
  )
}
