import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// Components
import Footer from '../components/Footer'
import Letter from '../components/Letter'

// Material UI
import { Box, Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

// Data
import President_Letter from '../data/President_letter'
import logo from '../data/logo.png'
import president_pic from '../data/profile_pics/president.jpg'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>LUMUN</title>
        <meta name="description" content="Lums Model United Nation Society" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <Box textAlign='center'>
          <Image
            src={logo}
            alt='LUMUN Logo'
            style={{ borderRadius: '50%' }}
            width={600}
            height={600}
          />
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
            <AppRegistrationIcon/> REGISTER NOW
          </Button>
        </Link>

        <Letter
          MarkupText={President_Letter}
          photo={president_pic}
        />
      </main>

      <Footer />
    </div>
  )
}
