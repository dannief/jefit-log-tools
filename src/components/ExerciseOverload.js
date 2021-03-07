import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Box, Text, Label, Input, Button } from 'theme-ui'
import {
  getOverloadOptions,
  overloadType,
  getOverloadOptVolume,
} from '../utils/logFunctions'

export default function ExerciseOverload({ exercise, exerciseVolume }) {
  const [volume, setVolume] = useState(exerciseVolume)
  const [volumePercent, setVolumePercent] = useState(100)
  const [overloadOptions, setOverloadOptions] = useState(null)

  useEffect(() => {
    setVolumePercent(Math.round((volume / exerciseVolume) * 100))
    setOverloadOptions(getOverloadOptions(exercise.sets, volume))
  }, [volume])

  const handleResetClick = e => {
    e.preventDefault()
    setVolume(exerciseVolume)
    setVolumePercent(100)
  }

  // TODOL Toggle between volume and volume percent being editable

  return (
    <Box>
      <Flex sx={{ flexDirection: 'column', mb: '30px' }}>
        <Text sx={{ color: 'gray.5', mb: 2 }}>
          Generate suggest workout from new volume
        </Text>
        <Flex as='form'>
          <Box sx={{ mr: 2 }}>
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='volume'
            >
              Volume
            </Label>
            <Input
              name='volume'
              sx={{
                width: '100px',
                textAlign: 'right',
                fontFamily: 'body',
                fontSize: 4,
              }}
              type='number'
              step={10}
              min={0}
              value={volume}
              onChange={e => setVolume(e.target.value)}
            ></Input>
          </Box>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              mr: 4,
            }}
          >
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='volumePercent'
            >
              Volume %
            </Label>
            {/* <Input
            name='volumePercent'
            sx={{ width: '100px' }}
            type='number'
            step={1}
            min={1}
            value={volumePercent}
            onChange={e => setVolumePercent(e.target.value)}
            disabled
          ></Input> */}
            <Text
              sx={{
                width: '100px',
                fontWeight: 'heading',
                textAlign: 'right',
                fontFamily: 'body',
                fontSize: 4,
                pr: 2,
                pb: 2,
              }}
              name='volumePercent'
            >
              {volumePercent}
            </Text>
          </Flex>
          <Button sx={{ alignSelf: 'flex-end' }} onClick={handleResetClick}>
            Reset
          </Button>
        </Flex>
      </Flex>

      {overloadOptions &&
        overloadOptions.map(opt => {
          return (
            <Flex sx={{ flexDirection: 'row', mb: 2 }}>
              <Box sx={{ width: '50px', mr: 2, textAlign: 'right' }}>
                {opt.weight + 'lbs'}
              </Box>
              <Box>x</Box>
              <Box sx={{ mr: 2, ml: 2, width: '60px', textAlign: 'center' }}>
                {opt.reps} reps
              </Box>
              <Box>x</Box>
              <Box sx={{ ml: 2, width: '60px', textAlign: 'left' }}>
                {opt.sets} sets
              </Box>
              <Box>{'='}</Box>
              <Box
                sx={{
                  ml: 2,
                  width: '75px',
                  textAlign: 'right',
                  fontWeight: 'heading',
                }}
              >
                {getOverloadOptVolume(opt)} lbs
              </Box>
            </Flex>
          )
        })}
    </Box>
  )
}
