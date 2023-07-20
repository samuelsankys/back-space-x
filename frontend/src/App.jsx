import { ThemeProvider, Box, Toolbar } from '@mui/material'
import theme from './styles/theme.js'
import Header from './layouts/header'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{display: 'flex', width: '100%' }}>
      <Header  />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
      <Toolbar />

        <Dashboard />
      </Box>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default App
