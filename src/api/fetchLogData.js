import { formatDate } from '../utils/dateUtils'

const jefitBaseUrl = 'http://localhost:8010'
const jefitLogsBaseUrl = jefitBaseUrl + '/proxy/members/user-logs/log/'

async function fetchLogData(params) {
  const pageText = await fetchPageHtml(params)
  const logData = parseHtml(pageText)
  return logData
}

async function fetchPageHtml({ username, date }) {
  if (!username) throw new Error('username is required')
  if (!date) throw new Error('date is required')

  let dateString = ''
  if (typeof date === 'string') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('date is invalid')
    dateString = date
  } else {
    dateString = formatDate(date, 'yyyy-MM-dd')
  }

  const response = await fetch(
    `${jefitLogsBaseUrl}?xid=${username}&dd=${dateString}`
  )
  return await response.text()
}

function parseHtml(value) {
  const data = {
    sessionInfo: {},
    exercises: [],
    notes: {},
  }

  const htmlDoc = new DOMParser().parseFromString(value, 'text/html')

  // TODO: Support multiple sessions on page

  // Session Info
  const sessioninfoNode = htmlDoc.querySelectorAll(
    '#workout-summary .workout-session > div > div > div'
  )
  for (let i = 0; i < sessioninfoNode.length; i++) {
    const infoDiv = sessioninfoNode[i]

    const imgSrc = infoDiv.children[0].children[0].src
    const infoType = infoDiv.children[1].children[0].innerHTML
    const infoData = infoDiv.children[1].children[1].children[0].innerHTML

    data.sessionInfo[camelize(infoType)] = {
      img: getImageUrl(imgSrc),
      value: infoData,
    }
  }

  // Excercises
  const logEntrySelector =
    '#workout-summary .allLogLists .exercise-block .fixedLogBar'
  const logNodes = htmlDoc.querySelectorAll(logEntrySelector)
  for (let i = 0; i < logNodes.length; i++) {
    let logEntry = { notes: [] }
    data.exercises[i] = logEntry

    const logEntryEl = logNodes[i]
    const entryNodes = logEntryEl.querySelectorAll(logEntrySelector + ' > div')

    logEntry.exerciseImage = getImageUrl(entryNodes[0].children[0].src)
    logEntry.exerciseName = entryNodes[1].children[0].innerHTML.trim()
    const oneRepmax = parseFloat(entryNodes[2].innerHTML)
    logEntry.oneRepMax = !Number.isNaN(oneRepmax) ? oneRepmax : null
    logEntry.sets = parseSets(entryNodes[3])
  }

  // Notes
  let globalNotes = data.notes

  const tdNodes = htmlDoc.querySelectorAll('#hor-minimalist_2 td')

  for (let i = 0; i < tdNodes.length; i++) {
    const tdEl = tdNodes[i]
    const label = tdEl.childNodes[0].textContent
    if (!label.includes('Exercise')) {
      continue
    }

    const exercise = tdEl.childNodes[1].textContent.trim()
    const note = tdEl.childNodes[3].textContent.trim()

    if (exercise) {
      const log = data.exercises.find(log => log.exerciseName === exercise)
      log.notes.push(note)
    }

    if (!globalNotes[exercise]) {
      globalNotes[exercise] = []
    }
    globalNotes[exercise].push(note)
  }

  return data
}

function parseSets(parentElement) {
  const sets = []

  const elements = Array.from(parentElement.childNodes).filter(
    el => el.nodeType === Node.TEXT_NODE && el.textContent.trim() !== ''
  )

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i]
    let text = el.textContent.trim()
    let set = {}
    if (text.includes('Lap/Rep')) {
      text = text.split(':')[1].trim()
      set.reps = parseInt(text)
      sets.push(set)
    } else if (/^\d\d:\d\d:\d\d$/.test(text)) {
      sets[sets.length - 1].interval = text
    } else {
      try {
        const weightAndReps = text.split(':')[1].split('x')
        set.weight = parseInt(weightAndReps[0])
        set.reps = parseInt(weightAndReps[1])
        sets.push(set)
      } catch {}
    }
  }

  return sets
}

function getImageUrl(imgSrc) {
  // TODO: Check if URL doesn't have hostname and add it
  return imgSrc
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export { fetchLogData }
