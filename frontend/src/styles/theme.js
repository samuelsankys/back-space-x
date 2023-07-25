import { createTheme } from '@mui/material/styles'

const themeDefault = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#052F5F',
    },
    secondary: {
      main: '#D5C67A',
    },
    error: {
      main: '#DC3545',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#EB5160',
    },
    common: {
      black: '#011627',
      white: '#F6F7F8',
    },
    text: {
      primary: '#8c8c8c',
      secondary: '#d9d9d9',
      disabled: '#f0f0f0',
    },
    divider: '#D5C67A',
  },
  typography: {
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21,
      '@media (max-width:960px)': {
        fontSize: '1.375rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27,
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'capitalize',
    },
    fontFamily: ['Google Sans', 'Poppins', 'sans-serif'].join(','),
  },
})
export default themeDefault
