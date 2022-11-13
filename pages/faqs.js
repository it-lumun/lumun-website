import Head from 'next/head'
import Footer from '../components/FooterContent'
import styles from '../styles/Home.module.css'
import { Accordion, AccordionDetails, AccordionSummary, Typography, Slide } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Faqs() {
  return (
    <div className={styles.container}>

      <Head>
        <title>LUMUN FAQs</title>
        <meta name="description" content="LUMUN - Frequenctly Asked Questions" />
        <link rel="icon" href="/lumun.ico" />
      </Head>

      <main className={styles.main}>
        <Slide in={true} direction='down' {...{timeout: 500}}>
          <div>
            {
              Content.map((faq, index) => {
                return (
                  <Accordion key={index} sx={{ opacity: 0.9 }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography variant='h6'>
                        {faq.summary}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='body1'>
                        {faq.details}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })
            }
          </div>
        </Slide>
      </main>

      <Footer />
    </div>
  )
}

const Content = [
  {
    summary: 'Which committees are there?',
    details: 'LUMUN is simulating 11 committees this year: - The General Assemblies (DISEC, SOCHUM, SPECPOL); Specialized Bodies (IMF, NATO, PNA); Economic and Social Council (UNDP, UNODC, CSW); Crisis Committees (UNSC, Crisis Cabinet)'
  },
  {
    summary: 'Are independent delegates allowed to be part of LUMUN?',
    details: 'If your school cannot attend LUMUN, there is no need to worry. Recently, we have started welcoming individual delegates whose schools could not send a formal delegation. You can register as a private delegate for our conference.'
  },
  {
    summary: 'Can we choose the committee and country of our preference?',
    details: 'You cannot choose a country of your preference. However, you can indicate your committee preference when registering, which may be taken into regard during allocations.'
  },
  {
    summary: 'What rules of procedure will be followed?',
    details: 'Please find the Rule of Procedure here. (attach the link)'
  },
  {
    summary: 'What is the minimum age for a delegate?',
    details: 'Although there are no defined age boundaries, LUMUN is an academic event. Delegates comprise of both high school and university students, who bring with them unique ideas and thought processes.'
  },
  {
    summary: 'Is there a dress code at the conference?',
    details: 'International business attire is the mandatory dress code for the conference. Delegates are expected to look professional; therefore, they are prohibited from wearing sneakers, flashy accessories, and displaying national symbols.'
  }
]
