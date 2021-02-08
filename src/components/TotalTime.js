/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Measurement from './Measurement'

export default function TotalTime({ time, showTitle }) {
  let title = showTitle ? 'Session Length' : ''
  return (
    <Measurement value={time} unit="mins" icon={faClock} title={title} ></Measurement>
  )
}
