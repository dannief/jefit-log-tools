/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Measurement({ value, unit, icon, title, }) {
  return (
    <Box>
      {title ? <Box color="gray.5" sx={{ fontSize: 1, fontWeight: "bold" }}>{title}</Box> : ""}
      <Box sx={{ fontWeight: "bold" }}><FontAwesomeIcon icon={icon} /> {value} {unit}</Box>
    </Box>
  )
}
