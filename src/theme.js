/* eslint-disable no-unused-vars */
import { tosh as preset } from '@theme-ui/presets'

const theme = {
  ...preset,
  initialColorModeName: 'light',
  styles: {
    ...preset.styles,
    a: {
      color: 'secondary',
      textDecorationLine: 'underline',
      textDecorationStyle: 'dotted',
      '&:hover': {
        color: 'secondary',
      },
      '&:visited': {
        color: 'secondary',
      },
    },
  },
}

export default theme
