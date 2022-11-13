import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Grid } from '@mui/material';
import ProfileCard from '../components/ProfileCard'
import { createClient } from 'contentful';

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
// member.fields.profileImage.fields.file.url or title
export default function Faqs({ members }) {

    return (
        <div className={styles.container}>

            <Head>
                <title>LUMUN FAQs</title>
                <meta name="description" content="LUMUN - Members" />
                <link rel="icon" href="/lumun.ico" />
            </Head>

            <main className={styles.main}>
                <h1>EC</h1>
                <hr />
                <Grid container spacing={3}>
                    {members
                        .filter((member) => member.fields.department === 'EC')
                        .map(member => (
                            <ProfileCard key={member.sys.id} member={member} />
                        ))}
                </Grid>
            </main>

            <Footer />
        </div>
    )
}

