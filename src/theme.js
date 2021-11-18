import { createTheme } from '@mui/material'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFE300',
    },
    secondary: {
      main: '#0E89E6',
    },
    background: {
      page: '#272b30',
    },
  },
  typography: {
    fontFamily: 'SF Distant Galaxy Alternate, sans-serif',
  },
  button: {
    background: '#C8C8C8',
  },
})

export default theme
