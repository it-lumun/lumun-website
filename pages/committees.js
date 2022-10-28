import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Committees() {
    return (
      <div className={styles.container}>

      <Head>
        <title>LUMUN Committees</title>
        <meta name="description" content="LUMUN - Committees" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Committees information will be uploaded soon</h1>
      </main>

      <Footer/>
    </div>
    )
  }