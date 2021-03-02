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
import { getVolume } from '../utils/logFunctions'
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

const fetchLogEffect = param => ({ setSelf }) => {
  const fetchLog = async () => {
    const response = await fetchLogData(param)
    return response
  }

  if (param && param.username && param.date) {
    setSelf(fetchLog())
  }
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

// TODO: Default value from route on load
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
  effects_UNSTABLE: [locationSyncEffect('date')],
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
    return getVolume(
      log.exercises.find(ex => ex.exerciseName === param.exerciseName).sets
    )
  },
})

export { currentUsername, currentDate, logQuery, exerciseVolume }
