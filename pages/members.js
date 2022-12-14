import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Grid, Box } from '@mui/material';
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

    const EC = members.filter((member) => member.fields.department === 'EC')
    const Secretariat = members.filter((member) => member.fields.department === 'Secretariat')
    const Directorate = members.filter((member) => member.fields.department === 'Directorate')

    return (
        <div className={styles.container}>

            <Head>
                <title>LUMUN FAQs</title>
                <meta name="description" content="LUMUN - Members" />
                <link rel="icon" href="/lumun.ico" />
            </Head>

            <main className={styles.main}>
                <MemberSection label={'Executive Council'} members={EC} />
                <MemberSection label={'Secretariat'} members={Secretariat} />
                <MemberSection label={'Directorate'} members={Directorate} />
            </main>

            <Footer />
        </div>
    )
}

const MemberSection = ({ label, members }) => {
    if (!members || members.length === 0) return null;

    return (
        <Box sx={{ bgcolor: 'background.paper', opacity: '0.8', borderRadius: '5px', marginTop: '30px', }}>
            <div style={{ textAlign: 'left', minWidth: '80vw', margin: '0 20px' }}>
                <h1>{label}</h1>
                <hr />
            </div>
            <Grid container spacing={3} sx={{
                maxWidth: '80vw', padding: '20px',
            }}>
                {members?.map(member => (
                    <ProfileCard key={member.sys.id} member={member} />
                ))}
            </Grid>
        </Box>
    )
}