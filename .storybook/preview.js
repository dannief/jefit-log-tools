import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'
import React from 'react'
import { Router } from 'react-router-dom'
import history from '../src/utils/history'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Story />
      </Router>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
