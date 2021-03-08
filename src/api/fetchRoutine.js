import { formatDate } from '../utils/dateUtils'

const jefitBaseUrl = 'http://localhost:8010/proxy/'
const jefitLogsBaseUrl = jefitBaseUrl + '/members/user-workout-routine/'

async function fetchRoutineData(params) {
  const pageText = await fetchPageHtml(params)
  const routineData = parseHtml(pageText)
  return routineData
}

async function fetchPageHtml({ username }) {
  if (!username) throw new Error('username is required')

  const response = await fetch(`${jefitLogsBaseUrl}?xid=${username}`)
  return await response.text()
}

function parseHtml(value) {
  const data = [
    {
      day: '',
      name: '',
      exercises: [
        {
          muscle: '',
          exerciseName: '',
          timer: 0,
          reps: 0,
          sets: 0,
        },
      ],
    },
  ]

  const htmlDoc = new DOMParser().parseFromString(value, 'text/html')

  return data
}

export { fetchRoutineData }
