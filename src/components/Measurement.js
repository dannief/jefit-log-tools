/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Measurement({
  value,
  icon,
  title,
  titleColor,
  valueColor,
}) {
  return (
    <Flex sx={{ flexDirection: 'row' }}>
      {icon ? (
        <Flex
          sx={{
            fontWeight: 'bold',
            fontSize: 5,
            mr: 2,
            mt: 1,
            alignItems: 'flex-start',
          }}
        >
          {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon} />}
        </Flex>
      ) : null}
      <Box>
        {title ? (
          <Box sx={{ fontSize: 2, fontWeight: 'bold', color: titleColor }}>
            {title}
          </Box>
        ) : null}
        <Box sx={{ fontSize: 1, fontWeight: 'bold', color: valueColor }}>
          {value}
        </Box>
      </Box>
    </Flex>
  )
}
