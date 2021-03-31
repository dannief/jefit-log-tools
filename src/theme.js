const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  colors: {
    white: '#fff',
    black: '#000',
    gray: [
      '#fff',
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
    ],
    text: '#777',
    background2: '#fcfbf9',
    background: '#f1eee8',
    primary: '#4c7bc7',
    secondary: '#b6cae6',
    secondaryDark: '#5987c6',
    accent: '#8c83cb',
    accentLight: '#aea8da',
    muted: '#dee2e6',
    success: '#b9ddcb',
    info: '#fff',
    warning: '#efddc1',
    danger: '#fccbc7',
    light: '#f8f9fa',
    dark: '#343a40',
    textMuted: '#6c757d',
  },
  space: ['0rem', '0.25rem', '0.5rem', '1rem', '1.5rem', '3rem'],
  fonts: {
    body: 'Raleway, sans-serif',
    heading: 'Raleway, sans-serif',
    monospace: '"Source Code Pro", monospace',
    sans: 'Raleway, sans-serif',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3.5rem',
    '4.5rem',
    '5.5rem',
    '6rem',
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
    light: 300,
    normal: 400,
    display: 300,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  sizes: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
  shadows: {
    default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
    sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
    lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
  },
  radii: {
    default: '0.25rem',
    sm: '0.2rem',
    lg: '0.3rem',
    pill: '50rem',
  },
  typeStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
    },
    display: {
      fontWeight: 'display',
      lineHeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      ml: 0,
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    p: {
      mb: 3,
      lineHeight: 'body',
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 7,
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 6,
    },
    h3: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 5,
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 4,
    },
    h5: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 3,
    },
    h6: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 0,
      mb: 2,
      fontSize: 2,
    },
    blockquote: {
      fontSize: 3,
      mb: 3,
    },
    table: {
      width: '100%',
      marginBottom: 3,
      color: 'gray.9',
      borderCollapse: 'collapse',
    },
    th: {
      verticalAlign: 'bottom',
      borderTopWidth: 2,
      borderTopStyle: 'solid',
      borderTopColor: 'gray.3',
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.3',
      padding: '.75rem',
      textAlign: 'inherit',
    },
    td: {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.3',
      verticalAlign: 'top',
      padding: '.75rem',
    },
    inlineCode: {
      color: 'pink',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  alerts: {
    error: {
      color: 'background',
      bg: 'danger',
    },
  },
  buttons: {
    muted: {
      color: 'gray.7',
      bg: 'muted',
    },
    secondary: {
      color: 'primary',
      bg: 'secondary',
    },
  },
  cards: {
    primary: {
      bg: 'background2',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
}

export default theme
