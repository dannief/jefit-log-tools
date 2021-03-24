/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef, useState, useEffect } from 'react'
import { jsx, Text, Box } from 'theme-ui'
import DatePicker from 'react-datepicker'
import {
  longDateFormat,
  parseShortDate,
  formatDate,
  formatShortToLongDateString,
} from '../utils/dateUtils'

import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = forwardRef(({ value, onClick, ...props }, ref) => (
  <Text onClick={onClick} ref={ref} {...props}>
    {value}
  </Text>
))

function ReactDatePicker({
  value,
  onChange,
  inputProps,
  placement = 'bottom-start',
}) {
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
      popperPlacement={placement}
      customInput={<CustomInput {...inputProps} />}
    />
  )
}

// eslint-disable-next-line no-unused-vars
function NativeDatePicker({ value, onChange, inputProps = {} }) {
  const { sx, ...restInputProps } = inputProps

  const [date, setDate] = useState(value)

  useEffect(() => {
    setDate(value)
  }, [value])

  const handleDateChange = dateValue => {
    setDate(dateValue)
    const dateString = formatDate(dateValue, 'short')
    onChange(dateString)
  }

  return (
    <Box>
      <input
        type='date'
        value={date}
        onChange={handleDateChange}
        sx={{ border: 0, position: 'relative', left: '90px', ...sx }}
        {...restInputProps}
      />
      <Text
        sx={{
          position: 'relative',
          display: 'inline-block',
          top: '-25px',
          backgroundColor: 'white',
        }}
      >
        {formatShortToLongDateString(date)}
      </Text>
    </Box>
  )
}

export default ReactDatePicker
