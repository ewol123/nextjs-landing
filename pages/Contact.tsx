import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '../components/layout/layout'

const pageTitle = "WebChat - Contact";


const EmailForm = dynamic(
  () => import('../components/contact/emailForm'),
  { ssr: false }
)


interface Props {
  
}

const Contact = (props: Props) => {
  return (
    <Layout page="contact">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <EmailForm/>
    </Layout>
  )
}

export default Contact
