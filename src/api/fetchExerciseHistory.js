import { getExerciseVolume } from '../utils/logFunctions'

const jefitBaseUrl = 'http://localhost:8010/proxy/'

async function fetchExerciseHistoryData(url) {
  const pageText = await fetchPageHtml(jefitBaseUrl + url)
  const routineData = parseHtml(pageText)
  return routineData
}

async function fetchPageHtml(url) {
  if (!url) throw new Error('url is required')

  const response = await fetch(url)
  return await response.text()
}

function parseHtml(value) {
  const data = []

  const htmlDoc = new DOMParser().parseFromString(value, 'text/html')

  const logContainerDivs = htmlDoc.querySelectorAll('#trainingLogs > div')

  for (let i = 0; i < logContainerDivs.length; i++) {
    let logItem = {}

    const logItemDivs = logContainerDivs[i].children

    logItem.date = logItemDivs[0].children[0].innerHTML
    logItem.sets = []

    const setsParas = Array.from(logItemDivs[1].children).filter(
      el => el.tagName === 'P'
    )
    for (let j = 0; j < setsParas.length; j++) {
      let set = {}

      const setPara = setsParas[j]

      const [weight, reps] = setPara.childNodes[1].textContent.trim().split('x')

      set.weight = parseFloat(weight)
      set.reps = parseFloat(reps)

      logItem.sets.push(set)
    }

    logItem.volume = getExerciseVolume(logItem.sets)

    logItem.oneRepMax = parseFloat(
      logItemDivs[2].children[0].childNodes[1].textContent.trim()
    )

    console.log(logItem)

    data.push(logItem)
  }

  return data
}

export { fetchExerciseHistoryData }
