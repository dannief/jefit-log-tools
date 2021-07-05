/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { Flex, Box, Text, Label, Input, Button } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getExerciseVolume } from '../utils/logFunctions'

export default function ExerciseConfigEditor({ exercise }) {
  const [sets, updateSets] = useImmer(exercise.sets)
  const [volume, setVolume] = useState(exercise.volume)
  const [volumeDiff, setVolumeDiff] = useState(0)
  const [percentage, setPercentage] = useState(100)

  useEffect(() => {
    updateSets(d => exercise.sets)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.sets])

  useEffect(() => {
    setVolume(getExerciseVolume(sets))
  }, [sets])

  useEffect(() => {
    const perc = Math.round((volume / exercise.volume) * 100)
    setPercentage(perc)
    setVolumeDiff(volume - exercise.volume)
  }, [volume, exercise.volume])

  const handleChange = (index, property) => e => {
    const value = e.target.value
    updateSets(d => {
      d[index][property] = value
    })
  }

  const handleReset = e => {
    e.preventDefault()
    updateSets(d => exercise.sets)
  }

  return (
    <Box>
      <Flex sx={{ flexDirection: 'column', mb: '30px' }}>
        <Text sx={{ color: 'gray.5', mb: 2 }}>
          Change parameters for desired volume
        </Text>
        {sets.map((set, index) => {
          return (
            <Flex as='form' key={index}>
              <Box sx={{ mr: 3 }}>
                <Label
                  sx={{ fontSize: 1, justifyContent: 'flex-end' }}
                  htmlFor='lbs'
                >
                  lbs
                </Label>
                <Input
                  name='lbs'
                  sx={{
                    width: '80px',
                    textAlign: 'right',
                    fontFamily: 'body',
                    fontSize: 3,
                    pt: 0,
                    pb: 0,
                  }}
                  type='number'
                  step={5}
                  min={0}
                  value={set.weight}
                  onChange={handleChange(index, 'weight')}
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
                    width: '60px',
                    textAlign: 'right',
                    fontFamily: 'body',
                    fontSize: 3,
                    pt: 0,
                    pb: 0,
                  }}
                  type='number'
                  step={1}
                  min={0}
                  value={set.reps}
                  onChange={handleChange(index, 'reps')}
                ></Input>
              </Box>
            </Flex>
          )
        })}
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
