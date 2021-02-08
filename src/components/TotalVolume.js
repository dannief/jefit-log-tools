/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Measurement from './Measurement'

export default function TotalVolume({ weight, showTitle }) {
  let title = showTitle ? 'Total Volume' : ''
  return (
    <Measurement value={weight} unit="lbs" icon={faDumbbell} title={title} ></Measurement>
  )
}
