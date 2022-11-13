import Head from 'next/head'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { Box, Typography, Grow } from '@mui/material'

export default function Ambassador() {
  return (
    <div className={styles.container}>

      <Head>
        <title>LUMUN Ambassador Program</title>
        <meta name="description" content="LUMUN - Ambassador Program" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ bgcolor: 'background.paper', opacity: 0.8, padding: '20px 5vw' }}>
          <Grow in={true} style={{transformOrigin: '0 0 0'}} {...{timeout: 1000}}>
            <div>
              <Typography variant='h2' sx={{ color: "#811" }}>
                Ambassador Program
              </Typography>
              <hr />
              {
                program.map(line => (
                  <>
                    <Typography variant='body1' fontSize={21}>
                      {line}
                    </Typography>
                    <br />
                  </>
                ))
              }
            </div>
          </Grow>
        </Box>
      </main>

      <Footer />
    </div>
  )
}

const program = [
  "The LUMUN Conference is amongst Pakistan's oldest and most prestigious Model United Nations events, and is hosted annually at the Lahore University of Management Sciences (LUMS). ",
  "The LUMUN Ambassador Programme is an initiative under which LUMUN selects a team of students from schools and universities outside LUMS to help us reach out to more people and get them to attend LUMUN. Ambassadors are provided with a certificate and recognition for their efforts in helping make the LUMUN conference a success.",
  "This initiative is for people who wish to be LUMUN Ambassadors and feel they can help to promote and advertise the LUMUN Conference to their friends and fellow students, and encourage them to attend LUMUN."
]


