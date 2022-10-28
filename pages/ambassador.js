import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Ambassador() {
  return (
    <div className={styles.container}>

      <Head>
        <title>LUMUN Ambassador Program</title>
        <meta name="description" content="LUMUN - Ambassador Program" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Ambassador Program information will be uploaded soon</h1>
      </main>

      <Footer/>
    </div>
  )
}