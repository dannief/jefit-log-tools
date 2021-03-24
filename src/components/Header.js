/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Text, Flex, Divider } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import DatePicker from './DatePicker'
import history from '../utils/history'

export default function Header({ date, username, onDateChange }) {
  return (
    <Box>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Menu
            menuButton={
              <MenuButton>
                <FontAwesomeIcon icon={'bars'} sx={{ fontSize: 6 }} />
              </MenuButton>
            }
          >
            <MenuItem onClick={() => history.push('/')}>Change Date</MenuItem>
            <MenuItem>
              <a
                href={
                  'https://www.jefit.com/members/user-workout-routine/?xid=' +
                  username
                }
                target='routine'
                sx={{ textDecoration: 'none' }}
              >
                View Routine
              </a>
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem onClick={() => history.push('/')}>Switch User</MenuItem>
          </Menu>
        </Flex>
        <Box sx={{ textAlign: 'right' }}>
          <Text>{username}</Text>
          <DatePicker
            value={date}
            onChange={onDateChange}
            inputProps={{ sx: { fontWeight: 900 } }}
            placement='bottom-end'
          ></DatePicker>
        </Box>
      </Flex>
      <Divider />
    </Box>
  )
}
