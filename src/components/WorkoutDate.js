/** @jsxImportSource theme-ui */
import { Box, Text } from 'theme-ui'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

export default function WorkoutDate({ date }) {
  const formattedDate = format(
    parse(date, 'yyyy-MM-dd', new Date()),
    'EEEE, MMMM d, yyyy'
  )
  return (
    <Box>
      <Text
        sx={{
          fontSize: 1,
          fontWeight: 'bold',
        }}
      >
        {formattedDate}
      </Text>
    </Box>
  )
}
