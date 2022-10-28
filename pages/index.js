import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Letter from '../components/Letter'

import President_Letter from '../data/President_letter'
import logo from '../data/logo.png'
import president_pic from '../data/profile_pics/president.jpg'
import { Box } from '@mui/material'

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

        <Letter
          MarkupText={President_Letter}
          photo={president_pic}
        />
      </main>

      <Footer />
    </div>
  )
}
