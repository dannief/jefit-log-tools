import {
  atom,
  atomFamily,
  selectorFamily,
  selector,
  DefaultValue,
} from 'recoil'
import localForage from 'localforage'
import queryString from 'query-string'

import { fetchLogData } from '../api/fetchLogData'
import { getExerciseVolume } from '../utils/logFunctions'
import { lastWeek } from '../utils/dateUtils'
import history from '../utils/history'

// ----- Effects -----

const locationSyncEffect = key => ({ setSelf }) => {
  const setSelfFromLocation = location => {
    const params = queryString.parse(location.search)
    if (params[key]) {
      setSelf(params[key])
    }
  }

  let unlisten = history.listen(location => {
    setSelfFromLocation(location)
  })

  setSelfFromLocation(history.location)

  return unlisten
}

const localForageEffect = key => ({ setSelf, onSet }) => {
  const setSelfFromLocalStorage = () => {
    setSelf(
      localForage
        .getItem(key)
        .then(savedValue =>
          savedValue != null ? savedValue : new DefaultValue()
        )
    )
  }

  setSelfFromLocalStorage()

  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      localForage.removeItem(key)
    } else {
      localForage.setItem(key, newValue)
    }
  })
}

// ----- Atoms -----

const currentUsername = atom({
  key: 'CurrentUsername',
  effects_UNSTABLE: [
    localForageEffect('username'),
    locationSyncEffect('username'),
  ],
})

const currentDate = atom({
  key: 'CurrentDate',
  default: lastWeek(),
  effects_UNSTABLE: [localForageEffect('date'), locationSyncEffect('date')],
})

const currentExerciseName = atom({
  key: 'CurrentExerciseName',
  effects_UNSTABLE: [
    localForageEffect('exercise'),
    locationSyncEffect('exercise'),
  ],
})

// ----- Selectors -----

const logQuery = selectorFamily({
  key: 'LogQuery',
  get: param => async ({ get }) => {
    const username =
      !param || !param.username ? get(currentUsername) : param.username
    const date = !param || !param.date ? get(currentDate) : param.date

    const response = await fetchLogData({ username, date })
    return response
  },
})

const exerciseVolume = selectorFamily({
  key: 'ExerciseVolume',
  get: param => ({ get }) => {
    const log = get(logQuery(param))
    const volume = getExerciseVolume(
      log.exercises.find(ex => ex.exerciseName === param.exerciseName).sets
    )
    return volume
  },
})

export {
  currentUsername,
  currentDate,
  currentExerciseName,
  logQuery,
  exerciseVolume,
}
