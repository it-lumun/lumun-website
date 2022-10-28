import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Faqs() {
    return (
      <div className={styles.container}>

      <Head>
        <title>LUMUN FAQs</title>
        <meta name="description" content="LUMUN - Frequenctly Asked Questions" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <h1>FAQs will be uploaded soon</h1>
      </main>

      <Footer/>
    </div>
    )
  }