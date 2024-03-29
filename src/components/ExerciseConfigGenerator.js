/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { Flex, Box, Text, Label, Input, Button } from 'theme-ui'
import {
  getOverloadOptions,
  overloadType,
  getOverloadOptVolume,
} from '../utils/logFunctions'

export default function ExerciseConfigGenerator({ exercise }) {
  const [volume, setVolume] = useState(null)
  const [volumePercent, setVolumePercent] = useState(100)
  const [overloadOptions, setOverloadOptions] = useState(null)
  const [showOverload, setShowOverload] = useState(false)
  const [isVolumeAmountMode, setIsVolumeAmountMode] = useState(true)

  useEffect(() => {
    setVolume(exercise.volume)
  }, [exercise])

  useEffect(() => {
    if (isVolumeAmountMode) {
      setVolumePercent(Math.round((volume / exercise.volume) * 100))
      setOverloadOptions(getOverloadOptions(exercise.sets, volume))
    }
  }, [volume, exercise, exercise.volume, isVolumeAmountMode])

  useEffect(() => {
    if (!isVolumeAmountMode) {
      const vol = Math.round((volumePercent / 100) * exercise.volume)
      setVolume(vol)
      setOverloadOptions(getOverloadOptions(exercise.sets, vol))
    }
  }, [volumePercent, exercise, exercise.volume, isVolumeAmountMode])

  const handleResetClick = e => {
    e.preventDefault()
    setVolume(exercise.volume)
    setVolumePercent(100)
    setShowOverload(false)
  }

  const handleVolumeChange = e => {
    setVolume(e.target.value)
    setShowOverload(true)
  }

  const handleVolumePercentChange = e => {
    setVolumePercent(e.target.value)
    setShowOverload(true)
  }

  function getStyleForOverloadType(opt, param) {
    let fontWeight = 'normal'
    let color = 'body'

    const weight =
      param === 'weight' &&
      (opt.type === overloadType.weight ||
        opt.type === overloadType.setsAndWeight)
    const reps =
      param === 'reps' &&
      (opt.type === overloadType.reps || opt.type === overloadType.setsAndReps)
    const sets =
      param === 'sets' &&
      (opt.type === overloadType.sets ||
        opt.type === overloadType.setsAndReps ||
        opt.type === overloadType.setsAndWeight)

    if (weight || reps || sets) {
      fontWeight = 'bold'
      color = 'primary'
    }

    return { fontWeight, color }
  }

  return (
    <Box>
      <Flex sx={{ flexDirection: 'column', mb: 3 }}>
        <Text sx={{ color: 'gray.5', mb: 2 }}>
          Change volume to generate suggested workout
        </Text>
        <Flex as='form'>
          <Box sx={{ mr: 2 }}>
            <Label
              sx={{ fontSize: 1, justifyContent: 'flex-end' }}
              htmlFor='volume'
            >
              Volume
            </Label>
            {isVolumeAmountMode ? (
              <Input
                name='volume'
                sx={{
                  width: '100px',
                  textAlign: 'right',
                  fontFamily: 'body',
                  fontSize: 4,
                  pt: 0,
                  pb: 0,
                }}
                type='number'
                step={10}
                min={0}
                value={volume}
                onChange={handleVolumeChange}
              ></Input>
            ) : (
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
                name='volume'
                onClick={() => setIsVolumeAmountMode(true)}
              >
                <div>{volume}</div>
              </Text>
            )}
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
            {isVolumeAmountMode ? (
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
                onClick={() => setIsVolumeAmountMode(false)}
              >
                {volumePercent}
              </Text>
            ) : (
              <Input
                name='volumePercent'
                sx={{
                  width: '100px',
                  textAlign: 'right',
                  fontFamily: 'body',
                  fontSize: 4,
                  pt: 0,
                  pb: 0,
                }}
                type='number'
                step={10}
                min={0}
                value={volumePercent}
                onChange={handleVolumePercentChange}
              ></Input>
            )}
          </Flex>
          <Button
            variant='secondary'
            sx={{ alignSelf: 'flex-end', ml: 'auto' }}
            onClick={handleResetClick}
          >
            Reset
          </Button>
        </Flex>
      </Flex>
      {showOverload ? (
        <table sx={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th sx={{ borderBottom: '1px solid gray', textAlign: 'right' }}>
                lbs
              </th>
              <th sx={{ borderBottom: '1px solid gray', textAlign: 'right' }}>
                Reps
              </th>
              <th sx={{ borderBottom: '1px solid gray', textAlign: 'right' }}>
                Sets
              </th>
              <th sx={{ borderBottom: '1px solid gray', textAlign: 'right' }}>
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {overloadOptions &&
              overloadOptions.map(opt => {
                return (
                  <tr key={opt.type}>
                    <td
                      sx={{
                        textAlign: 'right',
                        ...getStyleForOverloadType(opt, 'weight'),
                      }}
                    >
                      {opt.weight}
                    </td>
                    <td
                      sx={{
                        textAlign: 'right',
                        ...getStyleForOverloadType(opt, 'reps'),
                      }}
                    >
                      {opt.reps}
                    </td>
                    <td
                      sx={{
                        textAlign: 'right',
                        ...getStyleForOverloadType(opt, 'sets'),
                      }}
                    >
                      {opt.sets}
                    </td>
                    <td sx={{ textAlign: 'right' }}>
                      {getOverloadOptVolume(opt)}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      ) : null}

      {/*overloadOptions &&
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
        })*/}
    </Box>
  )
}
