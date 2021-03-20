import React, { forwardRef, useState, useEffect } from 'react'
import { Text } from 'theme-ui'
import DatePicker from 'react-datepicker'
import { longDateFormat, parseShortDate, formatDate } from '../utils/dateUtils'

import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = forwardRef(({ value, onClick, ...props }, ref) => (
  <Text onClick={onClick} ref={ref} {...props}>
    {value}
  </Text>
))

export default function ({ value, onChange, inputProps }) {
  const [date, setDate] = useState(parseShortDate(value))

  useEffect(() => {
    setDate(parseShortDate(value))
  }, [value])

  const handleDateChange = dateValue => {
    setDate(dateValue)
    const dateString = formatDate(dateValue, 'short')
    onChange(dateString)
  }

  return (
    <DatePicker
      dateFormat={longDateFormat}
      selected={date}
      onChange={handleDateChange}
      customInput={<CustomInput {...inputProps} />}
    />
  )
}
