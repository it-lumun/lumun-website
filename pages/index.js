import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'

// Hooks
import useWindowSize from '../hooks/useWindowSize'

// Components
import Footer from '../components/FooterContent'
import Letter from '../components/Letter'
import Countdown from 'react-countdown'

// Material UI
import { Box, Button, Grid, Grow, Typography } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

// Data
import logo from '../data/logo.png'

export default function Home({ letters, theme }) {

  const { width } = useWindowSize()

  return (
    <div className={styles.container}>
      <Head>
        <title>LUN</title>
        <meta name="description" content="Lums Model Uthau Nation Society" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <Box textAlign='center'>
          <Grow in={true} {...{ timeout: 1500 }}>
            <div>
              <Image
                src={logo}
                alt='LUMUN Logo'
                style={{ borderRadius: '50%' }}
                width={width > 800 ? 600 : width * 0.8}
                height={width > 800 ? 600 : width * 0.8}
              />
            </div>
          </Grow>
        </Box>

        <Link
          href='https://register.lums.edu.pk'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Button
            variant='contained'
            color='error'
            sx={{
              marginBottom: '40px',
              padding: '20px 40px'
            }}
          >
            <AppRegistrationIcon /> REGISTER NOW
          </Button>
        </Link>

        <Countdown
          date={theme.fields.eventdate}
          renderer={({ days, hours, minutes, seconds, completed }) => (
            <Box
              sx={{ bgcolor: '#300', padding: '20px 80px', borderRadius: '20px', boxShadow: '0 0 10px 0 #000'}}
            >
              <Typography fontSize={width < 600 ? 28 : 52} variant="h1">
                <strong>{days} : {pad(hours)} : {pad(minutes)} : {pad(seconds)}</strong>
              </Typography>

            </Box>
          )}
        />

        {/* create a line break with a reddish box shaddow */}
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#300',
            boxShadow: '0 0 10px 0 #000',
            margin: '40px 0',
          }}
        />

        {
          letters
            .sort((a, b) => a.fields.order - b.fields.order)
            .map(letter => (
              <Letter
                key={letter.sys.id}
                MarkupText={letter.fields.body}
                photo={'https:' + letter.fields.profile.fields.file.url}
              />
            ))
        }


      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "letter" })

  const themes = await client.getEntries({ content_type: "theme" })
  

  const activeThemes = themes.items.filter((theme) => theme.fields.isActive)
  
  const theme = (activeThemes || activeThemes.length > 0) ? activeThemes[0] : themes.items[0]

  return {
    props: {
      letters: res.items,
      theme: theme
    },
    revalidate: 1
  }
}

const pad = number => number < 10 ? `0${number}` : number
