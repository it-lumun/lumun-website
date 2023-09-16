import Head from 'next/head'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { Box, Typography, Grow } from '@mui/material'
import React from 'react'

export default function Ambassador() {
  return (
    <div className={styles.container}>

      <Head>
        <title>LUMUN Nepotism Program</title>
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
                program.map((line, index) => (
                  <div key={index}>
                    <Typography variant='body1' fontSize={21}>
                      {line}
                    </Typography>
                    <br />
                  </div>
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
  "The LUMUN Nepotism Programme is an initiative under which LUMUN selects a team of students who are ready to be a part of this toxic culture. We will make you waste your time and in the end only keep people jinko bas uthana ata ho.",
  "This initiative is for people who love nepotism, baqi ham apne puray khandaan ko rakhlein ge, easy scn.",
]


