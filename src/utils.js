import format from 'date-fns/format'

function formatDate(date) {
  return format(date, 'yyyy-MM-dd')
}

export { formatDate }
