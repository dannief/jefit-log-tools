/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'
import { useRecoilValue } from 'recoil'
import Header from './Header'
import { currentDate, currentUsername } from '../state'
import history from '../utils/history'

export default function Layout({ children }) {
  const date = useRecoilValue(currentDate)
  const username = useRecoilValue(currentUsername)

  const handleDateChange = dateString => {
    history.push(`/log?date=${dateString}`)
  }

  return (
    <Container p={2}>
      <Header
        date={date}
        username={username}
        onDateChange={handleDateChange}
      ></Header>
      {children}
    </Container>
  )
}
