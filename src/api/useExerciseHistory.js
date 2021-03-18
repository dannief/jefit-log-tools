import { useAsync } from 'react-use'
import { fetchExerciseHistoryData } from './fetchExerciseHistory'

export default function (url) {
  const result = useAsync(async () => {
    return fetchExerciseHistoryData(url)
  }, [url])

  return result
}
