/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Text, Flex, Divider } from 'theme-ui'
import { Link } from 'react-router-dom'
import DatePicker from './DatePicker'

export default function Header({ date, username, routineName, onDateChange }) {
  return (
    <Box>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Box>
          <DatePicker value={date} onChange={onDateChange}></DatePicker>
          {/* <Box sx={{ fontSize: 1 }}>
            <Text sx={{ color: 'gray.5' }}>Routine:</Text>
            <Text>{routineName}</Text>
          </Box> */}
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Text>{username}</Text>
          <Box>
            <Link sx={{ fontSize: 1 }} to='/'>
              Switch User
            </Link>
          </Box>
        </Box>
      </Flex>
      <Divider />
    </Box>
  )
}
