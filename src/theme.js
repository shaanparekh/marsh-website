import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d2847',
      light: '#1a3a5c',
      dark: '#081c33',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&.MuiButton-contained:hover': {
            boxShadow: '0 8px 24px rgba(13, 40, 71, 0.25)',
          },
        },
      },
    },
  },
})

export default theme
