import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Navbar/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
