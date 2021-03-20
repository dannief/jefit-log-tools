/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { jsx, Flex, Box, Text, Label, Input, Button } from 'theme-ui'
import { getOverloadOptVolume } from '../utils/logFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ExerciseVolumeEditor({ overloadOpt, exerciseVolume }) {
  const [opt, updateOpt] = useImmer(overloadOpt)
  const [volume, setVolume] = useState(null)
  const [volumeDiff, setVolumeDiff] = useState(0)
  const [percentage, setPercentage] = useState(100)

  useEffect(() => {
    setVolume(getOverloadOptVolume(opt))
  }, [opt])

  useEffect(() => {
    const perc = Math.round((volume / exerciseVolume) * 100)
    setPercentage(perc)
    setVolumeDiff(volume - exerciseVolume)
  }, [volume, exerciseVolume])

  const handleChange = property => e => {
    const value = e.target.value
    updateOpt(d => {
      d[property] = value
    })
  }

  const handleReset = e => {
    e.preventDefault()
    updateOpt(d => overloadOpt)
  }

  return (
    <Box>
      <Flex sx={{ flexDirection: 'column', mb: '30px' }}>
        <Text sx={{ color: 'gray.5', mb: 2 }}>
          Change parameters for desired volume
        </Text>
        <Flex as='form'>
          <Box sx={{ mr: 2 }}>
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='lbs'
            >
              lbs
            </Label>
            <Input
              name='lbs'
              sx={{
                width: '70px',
                textAlign: 'right',
                fontFamily: 'body',
                fontSize: 3,
                pt: 0,
                pb: 0,
              }}
              type='number'
              step={5}
              min={0}
              value={opt.weight}
              onChange={handleChange('weight')}
            ></Input>
          </Box>
          <Box sx={{ mr: 2 }}>
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='reps'
            >
              reps
            </Label>
            <Input
              name='reps'
              sx={{
                width: '55px',
                textAlign: 'right',
                fontFamily: 'body',
                fontSize: 3,
                pt: 0,
                pb: 0,
              }}
              type='number'
              step={1}
              min={0}
              value={opt.reps}
              onChange={handleChange('reps')}
            ></Input>
          </Box>
          <Box sx={{ mr: 2 }}>
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='sets'
            >
              sets
            </Label>
            <Input
              name='sets'
              sx={{
                width: '45px',
                textAlign: 'right',
                fontFamily: 'body',
                fontSize: 3,
                pt: 0,
                pb: 0,
              }}
              type='number'
              step={1}
              min={0}
              value={opt.sets}
              onChange={handleChange('sets')}
            ></Input>
          </Box>
          <Box
            sx={{
              pt: 3,
              mr: 1,
              fontSize: 4,
              fontWeight: 'bold',
              alignSelf: 'flex-end',
            }}
          >
            {'='}
          </Box>
          <Box sx={{ mr: 2 }}>
            <Text>Volume</Text>
            <Text>{volume} lbs</Text>
          </Box>
        </Flex>
        <Flex sx={{ mt: 1, alignItems: 'center' }}>
          {percentage !== 100 ? (
            <Box>
              {/* <FontAwesomeIcon
                sx={{ color: percentageDiff > 0 ? 'blue' : 'red' }}
                icon={percentageDiff > 0 ? 'arrow-up' : 'arrow-down'}
              />{' '} */}
              {Math.abs(percentage)} %
            </Box>
          ) : null}
          {volumeDiff !== 0 ? (
            <Box sx={{ ml: 4 }}>
              <FontAwesomeIcon
                sx={{ color: volumeDiff > 0 ? 'blue' : 'red' }}
                icon={volumeDiff > 0 ? 'plus' : 'minus'}
              />{' '}
              {Math.abs(volumeDiff)} lbs
            </Box>
          ) : null}
          <Box sx={{ ml: 'auto' }}>
            {percentage !== 100 ? (
              <Button variant='secondary' onClick={handleReset}>
                Reset
              </Button>
            ) : null}
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
