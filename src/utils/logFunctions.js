import meanBy from 'lodash/meanBy'
import minBy from 'lodash/minBy'
import maxBy from 'lodash/maxBy'

/*
{
  sessionInfo: {
    sessionLength,
    actualWorkout,
    wastedTime,
    restTimer,
    exercisesDone,
    weightLifted
  },
  exercises: [{
    exerciseImage, 
    exerciseName, 
    oneRepMax, 
    sets: [{
      weight,
      reps,
      interval
    }],
    notes: [note: string]
   }],
  notes: {
    [exerciseName: string]: [note: string]
  },
}
*/

const overloadType = {
  weight: 'WEIGHT',
  reps: 'REPS',
  setsAndReps: 'SETS_AND_REPS',
  setsAndWeight: 'SETS_AND_WEIGHT',
}

function getVolume(sets) {
  return sets.reduce((prevValue, currValue) => {
    return prevValue + (currValue.weight ?? 0) * currValue.reps
  }, 0)
}

// TODO: Implement getOverloadOptions options:
//  1. Use min, avg, max value for non-changing parameter?
//  2. When increase set, should keep reps or weight constant; how much to increase sets by?
//  TODO: Round weight to nearest 5lbs
function getOverloadOptions(sets, newVolume) {
  const avgWeight = meanBy(sets, 'weight')
  const avgReps = meanBy(sets, 'reps')
  const numSets = sets.length

  const overloadInfo = [
    {
      weight: Math.ceil(newVolume / avgReps / numSets),
      reps: avgReps,
      sets: numSets,
      type: overloadType.weight,
    },
    {
      weight: avgWeight,
      reps: Math.ceil(newVolume / avgWeight / numSets),
      sets: numSets,
      type: overloadType.reps,
    },
    {
      weight: avgWeight, // keep average weight, add 1 set, change reps
      reps: Math.ceil(newVolume / avgWeight / (numSets + 1)),
      sets: numSets + 1,
      type: overloadType.setsAndReps,
    },
    {
      weight: Math.ceil(newVolume / avgReps / (numSets + 1)), // change weight, add 1 set, keep average reps
      reps: avgReps,
      sets: numSets + 1,
      type: overloadType.setsAndWeight,
    },
  ]

  return overloadInfo
}

function getSetsFromOverloadOption(overloadOption) {
  const sets = []
  for (let i = 0; i < overloadOption.sets; i++) {
    sets.push({
      weight: overloadOption.weight,
      reps: overloadOption.reps,
    })
  }

  return sets
}

export { getVolume, getOverloadOptions, overloadType }
