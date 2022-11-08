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
        <Content/>
      </main>

      <Footer />
    </div>
  )
}

const Content = () => (
  <div> 
    <h3>Which committees are there?</h3>
    LUMUN is simulating 11 committees this year: - The General Assemblies (DISEC, SOCHUM, SPECPOL); Specialized Bodies (IMF, NATO, PNA); Economic and Social Council (UNDP, UNODC, CSW); Crisis Committees (UNSC, Crisis Cabinet). Please find more details here.

    <h3>Are independent delegates allowed to be part of LUMUN?</h3>
    If your school cannot attend LUMUN, there is no need to worry. Recently, we have started welcoming individual delegates whose schools could not send a formal delegation. You can register as a private delegate for our conference.

    <h3>Can we choose the committee and country of our preference?</h3>
    You cannot choose a country of your preference. However, you can indicate your committee preference when registering, which may be taken into regard during allocations.


    <h3>What rules of procedure will be followed?</h3>
    Please find the Rule of Procedure here. (attach the link)

    <h3>What is the minimum age for a delegate?</h3>

    Although there are no defined age boundaries, LUMUN is an academic event. Delegates comprise of both high school and university students, who bring with them unique ideas and thought processes.

    <h3>Is there a dress code at the conference?</h3>
    International business attire is the mandatory dress code for the conference. Delegates are expected to look professional; therefore, they are prohibited from wearing sneakers, flashy accessories, and displaying national symbols.
  </div>
)