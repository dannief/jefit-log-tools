import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const decorators = [(Story) => <ThemeProvider theme={theme}><Story /></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}