/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { Flex, Box, Text, Label, Input, Button } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getExerciseVolume } from '../utils/logFunctions'
import Measurement from './Measurement'

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

  const handleDelete = index => e => {
    updateSets(d => {
      d.splice(index, 1)
    })
  }

  const handleAdd = e => {
    updateSets(d => {
      d.push({
        weight: 0,
        reps: 0,
      })
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
          Change parameters for desired new volume
        </Text>
        <Flex>
          <Box>
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
                  <Box sx={{ mr: 3 }}>
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
                  <Flex
                    sx={{ alignItems: 'flex-end', fontSize: 3, mb: 2 }}
                    onClick={handleDelete(index)}
                  >
                    <FontAwesomeIcon icon='times' />
                  </Flex>
                </Flex>
              )
            })}
            <Box>
              <Button sx={{ bg: 'secondary', mt: 3 }} onClick={handleAdd}>
                Add Set
              </Button>
            </Box>
          </Box>
          <Flex
            sx={{
              mt: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
              ml: 4,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                p: 2,
                bg: 'muted',
                width: '100%',
              }}
            >
              <Measurement
                sx={{ mb: 3 }}
                title='New Volume'
                titleColor='gray'
                value={volume + ' lbs'}
              ></Measurement>
              <Measurement
                sx={{ mb: 3 }}
                title='Volume %'
                titleColor='gray'
                value={Math.abs(percentage) + ' %'}
              ></Measurement>
              <Measurement
                sx={{ mb: 3 }}
                title='Volume Diff'
                titleColor='gray'
                value={Math.abs(volumeDiff) + ' lbs'}
                icon={volumeDiff > 0 ? 'plus' : volumeDiff < 0 ? 'minus' : null}
                isIconInline={true}
              ></Measurement>
              <Box>
                {percentage !== 100 ? (
                  <Button sx={{ bg: 'secondary' }} onClick={handleReset}>
                    Reset
                  </Button>
                ) : null}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
