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
import ProfileCard from '../components/ProfileCard'

// Material UI
import { Box, Button, Grid, Grow } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

// Data
import President_Letter from '../data/President_letter'
import logo from '../data/logo.png'
import president_pic from '../data/profile_pics/president.jpg'

export default function Home({ members }) {

  const { width } = useWindowSize()

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

        <Letter
          MarkupText={President_Letter}
          photo={president_pic}
        />

        <Box sx={{bgcolor: 'background.paper', opacity: '0.8', borderRadius: '5px', marginTop: '30px', }}>
          <div style={{ textAlign: 'left', minWidth: '80vw', margin: '0 20px' }}>
            <h1>EC</h1>
            <hr />
          </div>
          <Grid container spacing={3} sx={{
            maxWidth: '80vw', padding: '20px',
          }}>
            {members
              .filter((member) => member.fields.department === 'EC')
              .map(member => (
                <ProfileCard key={member.sys.id} member={member} />
              ))}
          </Grid>
        </Box>

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

  const res = await client.getEntries({ content_type: "member" })

  return {
    props: {
      members: res.items,
    },
    revalidate: 1
  }
}