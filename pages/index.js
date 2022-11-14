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

// Material UI
import { Box, Button, Grid, Grow } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

// Data
import President_Letter from '../data/President_letter'
import logo from '../data/logo.png'
import president_pic from '../data/profile_pics/president.jpg'

export default function Home({ letters }) {

  const { width } = useWindowSize()

  console.log(letters)

  return (
    <div className={styles.container}>
      <Head>
        <title>LUMUN</title>
        <meta name="description" content="Lums Model United Nation Society" />
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

        {
          letters.map(letter => (
            <Letter
              key={letter.sys.id}
              MarkupText={letter.fields.body}
              photo={'https:' + letter.fields.profile.fields.file.url}
            />
          )).reverse()
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

  return {
    props: {
      letters: res.items,
    },
    revalidate: 1
  }
}