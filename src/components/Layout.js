/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Box, Container, Input, Button } from 'theme-ui'
import React from 'react'

export default function Layout({ children }) {
  return <Container p={2}>{children}</Container>
}
