import React from 'react'
import Head from 'next/head'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box } from '@mui/material'

export default function AnnouncementPage({ announcements }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LUMUN</title>
        <meta name="description" content="Lums Model United Nation Society" />
        <link rel="icon" href="/lumun.ico" />
      </Head>
      <main className={styles.main}>
        {
          announcements?.map((announcement, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(340deg, rgba(88,1,4,1) 17%, rgba(77,0,0,1) 38%, rgba(38,0,0,1) 65%)",
                padding: "3rem",
                margin: "30px 0",
                fontFamily: 'Monaco, monospace',
                fontSize: "1.2rem",
              }}
            >
              {documentToReactComponents(announcement.fields.body)}
            </div>
          ))
        }
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "announcements" })

  return {
    props: {
      announcements: res.items,
    },
    revalidate: 1
  }
}

// lorem ipsum
/*


*/