/** @jsxImportSource theme-ui */
import { Box, Flex, Text, Themed } from 'theme-ui'
import { Fragment } from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { exerciseHistoryQuery } from '../state'
import { formatShortToLongDateString } from '../utils/dateUtils'
import Exercise from '../components/Exercise'

export default function History() {
  const { exerciseName, logs } = useRecoilValue(exerciseHistoryQuery)

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ mb: 2 }}>
        <Text
          sx={{
            fontSize: 3,
            fontWeight: '600',
            mb: 3,
            color: 'secondary',
          }}
        >
          {exerciseName}
        </Text>
      </Box>
      <Box>
        {logs.map(log => {
          return (
            <Fragment key={log.date}>
              <Themed.a as={Link} to={`/log?date=${log.date}`}>
                <Text
                  sx={{
                    fontWeight: '600',
                    fontSize: 2,
                    mb: 1,
                  }}
                >
                  {formatShortToLongDateString(log.date)}
                </Text>
              </Themed.a>
              <Exercise exercise={log} showExerciseName={false}></Exercise>
            </Fragment>
          )
        })}
      </Box>
    </Flex>
  )
}
