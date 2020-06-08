import Head from 'next/head'

import Layout from '../components/layout/layout'
import HeadingSegment from "../components/index/headingSegment";
import WelcomeSegment from "../components/index/welcomeSegment";
import CompatibilitySegment from "../components/index/compatibilitySegment";
import DetailsSegment from "../components/index/detailsSegment";

import getWidth from "../lib/getWidth";
import {
  Responsive,
  Sidebar,
} from 'semantic-ui-react'
const pageTitle = "WebChat";


interface Props {
  
}

const Home = (props: Props) => {
  return (
    <Layout home page="home">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <HeadingSegment mobile />
      </Responsive>

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <HeadingSegment />
      </Responsive>


      <WelcomeSegment />
      <CompatibilitySegment />
      <DetailsSegment />
    </Layout>
  )
}

export default Home