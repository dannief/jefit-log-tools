/** @jsxImportSource theme-ui */
import { Box, Input, Button, Label } from 'theme-ui'
import { useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  currentUsername as currentUsernameState,
  currentDate as currentDateState,
} from '../state'
import Heading from '../components/Heading'
import DatePicker from '../components/DatePicker'
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
    <Box as='form' sx={{ p: 2 }}>
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
            username
          }
          target='routine'
        >
          View Routine
        </Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Label htmlFor='date'>Workout Date</Label>
        <Box sx={{ borderRadius: 5, p: 2, border: '1px solid black' }}>
          <DatePicker
            name='date'
            value={date}
            onChange={dt => setDate(dt)}
            sx={{ fontSize: 3 }}
          />
        </Box>
      </Box>
      <Box>
        <Button onClick={redirectToLogPage}>View Log</Button>
      </Box>
    </Box>
  )
}
