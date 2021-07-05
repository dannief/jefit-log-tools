/* eslint-disable no-unused-vars */
import { tosh as preset } from '@theme-ui/presets'

const theme = {
  ...preset,
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
      // display: 'inline-block',
      // paddingBottom: '2px',
    },
  },
}

export default theme
