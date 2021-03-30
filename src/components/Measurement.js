/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Measurement({
  value,
  icon,
  title,
  titleColor = 'gray.5',
}) {
  return (
    <Flex sx={{ flexDirection: 'row' }}>
      {icon ? (
        <Flex
          sx={{
            fontWeight: 'bold',
            fontSize: 7,
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
          <Box color={titleColor} sx={{ fontSize: 2, fontWeight: 'bold' }}>
            {title}
          </Box>
        ) : null}
        <Box sx={{ fontSize: 1, fontWeight: 'bold' }}>{value}</Box>
      </Box>
    </Flex>
  )
}
