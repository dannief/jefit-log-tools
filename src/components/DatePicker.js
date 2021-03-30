/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef, useState, useEffect } from 'react'
import { jsx, Text, Box, Button } from 'theme-ui'
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

// eslint-disable-next-line no-unused-vars
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

  const handleDateChange = event => {
    onChange(event.target.value)
  }

  return (
    <Box sx={{ position: 'relative' /*lineHeight: 0*/ }}>
      <input
        type='date'
        value={value}
        onChange={handleDateChange}
        sx={{
          border: 0,
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          cursor: 'pointer',
          '&::-webkit-calendar-picker-indicator': {
            position: 'absolute',
            top: '-150%',
            left: '-150%',
            width: '300%',
            height: '300%',
            cursor: 'pointer',
          },
          ...sx,
        }}
        {...restInputProps}
      />
      <Button variant='secondary' sx={{}}>
        {value ? formatShortToLongDateString(value) : 'Select Date'}
      </Button>
    </Box>
  )
}

export default NativeDatePicker
