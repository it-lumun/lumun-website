import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import BG from '../data/background.png'
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
        <Image
           className={styles.landingImage}
           src={BG}
           alt='background'
           layout='fill'
           objectFit='cover'
           objectPosition='center'
        />
        <CssBaseline/>
        <Navbar/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
