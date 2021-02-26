/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Container, Input, Button } from 'theme-ui'
import React from 'react'

export default function Log({ children }) {
  return <Container p={4}>{children}</Container>
}
