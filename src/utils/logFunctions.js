import meanBy from 'lodash/meanBy'

const overloadType = {
  weight: 'WEIGHT',
  reps: 'REPS',
  setsAndReps: 'SETS_AND_REPS',
  setsAndWeight: 'SETS_AND_WEIGHT',
}

function getExerciseVolume(sets) {
  return sets.reduce((prevValue, currValue) => {
    return prevValue + (currValue.weight ?? 0) * currValue.reps
  }, 0)
}

function getOverloadOptVolume(opt) {
  return opt.weight * opt.reps * opt.sets
}

function round5(number) {
  return Math.ceil(number / 5) * 5
}

function getExerciseSummary(sets) {
  return {
    weight: round5(meanBy(sets, 'weight')),
    reps: Math.ceil(meanBy(sets, 'reps')),
    sets: sets.length,
  }
}

// TODO: Implement getOverloadOptions options:
//  1. Use min, avg, max value for non-changing parameter?
//  2. When increase set, should keep reps or weight constant; how much to increase sets by?
function getOverloadOptions(sets, newVolume) {
  const {
    weight: avgWeight,
    reps: avgReps,
    sets: numSets,
  } = getExerciseSummary(sets)

  const overloadInfo = [
    {
      weight: round5(newVolume / avgReps / numSets),
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
      reps: Math.floor(newVolume / avgWeight / (numSets + 1)),
      sets: numSets + 1,
      type: overloadType.setsAndReps,
    },
    {
      weight: round5(newVolume / avgReps / (numSets + 1)), // change weight, add 1 set, keep average reps
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

export {
  getExerciseVolume,
  getExerciseSummary,
  getOverloadOptVolume,
  getOverloadOptions,
  overloadType,
}
