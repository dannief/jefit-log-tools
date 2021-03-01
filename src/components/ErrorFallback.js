/** @jsx jsx */
import { jsx, Flex, Alert, Box, Button, Text } from 'theme-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <Alert variant='error'>
        <Text sx={{ mr: 2 }}>
          <FontAwesomeIcon icon='exclamation-circle'></FontAwesomeIcon>
        </Text>{' '}
        Oops! There was an unexpected issue.
      </Alert>
      <Button variant='secondary' sx={{ mt: 4 }} onClick={resetErrorBoundary}>
        Please Try Again
      </Button>
    </Flex>
  )
}
