/** @jsxImportSource theme-ui */
import { Box, Text, Flex, Divider, useThemeUI } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import DatePicker from './DatePicker'
import history from '../utils/history'

export default function Header({ date, username, onDateChange }) {
  const context = useThemeUI()

  const styles = {
    menuItem: {
      color: context.theme.colors.background,
      hover: {
        backgroundColor: context.theme.colors.accent,
      },
    },
  }

  return (
    <Box>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Menu
            menuButton={
              <MenuButton>
                <FontAwesomeIcon
                  icon={'bars'}
                  sx={{ fontSize: 5, color: 'text' }}
                />
              </MenuButton>
            }
            sx={{ bg: 'primary' }}
          >
            <MenuItem
              onClick={() => history.push('/')}
              styles={styles.menuItem}
            >
              Switch User
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem
              onClick={() => history.push('/')}
              styles={styles.menuItem}
            >
              Change Date
            </MenuItem>
            <MenuItem styles={styles.menuItem}>
              <a
                href={
                  'https://www.jefit.com/members/user-workout-routine/?xid=' +
                  username
                }
                target='routine'
                sx={{ textDecoration: 'none', color: 'background' }}
              >
                View Routine
              </a>
            </MenuItem>
            <MenuDivider></MenuDivider>
            <MenuItem styles={styles.menuItem}>
              <a
                href='https://www.carlosrendon.me/barbell_rack_calculator/'
                target='rack-calc'
                sx={{ textDecoration: 'none', color: 'background' }}
              >
                Rack Calculator
              </a>
            </MenuItem>
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
