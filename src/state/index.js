import {
  atom,
  atomFamily,
  selectorFamily,
  selector,
  DefaultValue,
} from 'recoil'
import subDays from 'date-fns/subDays'
import { fetchLogData } from '../api/fetchLogData'
import { formatDate } from '../utils'
import localForage from 'localforage'

// ----- Effects -----

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

const currentUsernameState = atom({
  key: 'CurrentUsername',
  effects_UNSTABLE: [localForageEffect('username')],
})

const currentDateState = atom({
  key: 'CurrentDate',
  default: formatDate(subDays(new Date(), 7)),
})

// Cached log data i.e contains im memory mapping of logs by username and date
// TODO:  Save session or local storage to survive browser refreshes and closing respectively
const logsState = atomFamily({
  key: 'Logs',
  default: null,
  effects_UNSTABLE: param => [fetchLogEffect(param)],
})

// ----- Selectors -----

const logForCurrentUserAndDateState = selector({
  key: 'LogForCurrentUserAndDate',
  get: ({ get }) => {
    return get(
      logsState({
        username: get(currentUsernameState),
        date: get(currentDateState),
      })
    )
  },
})

const logForCurrentUserState = selectorFamily({
  key: 'LogQueryForCurrentUser',
  get: date => async ({ get }) => {
    const username = get(currentUsernameState)
    const log = await get(logsState({ username, date }))
    return log
  },
})

export {
  currentUsernameState,
  currentDateState,
  logForCurrentUserAndDateState,
  logForCurrentUserState,
  logsState,
}
