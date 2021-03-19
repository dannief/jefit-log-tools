import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import parse from 'date-fns/parse'

const shortDateFormat = 'yyyy-MM-dd'

function formatDate(date, type = 'short') {
  if (type === 'short') return format(date, shortDateFormat)
  if (type === 'long') return format(date, 'PPPP')

  throw new Error('format type is not supported')
}

function lastWeek() {
  return formatDate(subDays(new Date(), 7))
}

function parseShortDate(dateString) {
  return parse(dateString, shortDateFormat, new Date())
}

function formatShortToLongDateString(shortDateString) {
  return formatDate(parseShortDate(shortDateString), 'long')
}

export { formatDate, lastWeek, formatShortToLongDateString }
