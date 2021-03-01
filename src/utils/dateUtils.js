import format from 'date-fns/format'
import subDays from 'date-fns/subDays'

function formatDate(date) {
  return format(date, 'yyyy-MM-dd')
}

function lastWeek() {
  return formatDate(subDays(new Date(), 7))
}

export { formatDate, lastWeek }
