import { useAsync } from 'react-use'
import { fetchLogData } from './fetchLogData'

export default function (username, date) {
  const result = useAsync(async () => {
    return fetchLogData({ username, date })
  }, [username, date])

  return result
}
