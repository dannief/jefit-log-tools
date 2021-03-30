/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Flex, Text } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { exerciseHistoryQuery } from '../state'
import { formatShortToLongDateString } from '../utils/dateUtils'
import Exercise from '../components/Exercise'

export default function History() {
  const { exerciseName, logs } = useRecoilValue(exerciseHistoryQuery)

  console.log(logs)

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ mb: 2 }}>
        <Text
          sx={{
            fontSize: 4,
            fontWeight: '600',
            mb: 3,
          }}
        >
          {exerciseName}
        </Text>
      </Box>
      <Box>
        {logs.map(log => {
          return (
            <>
              <Text
                key={log.date}
                sx={{
                  color: 'secondaryDark',
                  fontWeight: '700',
                  fontSize: 3,
                  mb: 1,
                }}
              >
                {formatShortToLongDateString(log.date)}
              </Text>
              <Exercise
                key={log.date}
                exercise={log}
                showExerciseName={false}
              ></Exercise>
            </>
          )
        })}
      </Box>
    </Flex>
  )
}
