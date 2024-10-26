import { CssBaseline, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react'
import SignIn from './components/sing-in/SignIn';



function App() {
  const themePreference: string | null = localStorage.getItem('userColorPreference')
  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(themePreference !== null ? themePreference : prefersDarkMode ? "dark" : "light")



  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  }); 

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <SignIn/>
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
