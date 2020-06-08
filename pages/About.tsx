import Head from 'next/head'
import Link from "next/link";
import { Card, Segment, Grid, Divider, Header, Icon, Image, Item } from 'semantic-ui-react'
import Layout from '../components/layout/layout'

const items = [
  {
    childKey: 0,
    image: "/undraw_sign_in_e6hj.svg",
    header: 'First Step',
    description: "For starters sign up for a new account. Fill in the form and then click submit. Be sure to accept terms and conditions.",
    meta: 'Sign Up',
    extra: <Link href="/register">
    <a>
    <Icon name="arrow right" />
    Click here to register
    </a>
    </Link>,
  },
  {
    childKey: 1,
    image: "/undraw_arrived_f58d.svg",
    header: 'Second Step',
    description: 'You should receive an activation email shortly. Click on the link to activate your registration.',
    meta: 'Activate registration',
    extra: <Link href="/contact">
    <a>
    <Icon name="arrow right" />
    Contact for help
    </a>
    </Link>,
  },
  {
    childKey: 2,
    image: "/undraw_authentication_fsn5.svg",
    header: 'Third Step',
    description: 'After you activated the account, you can now login to the dashboard with your credentials.',
    meta: 'Login to dashboard',
    extra: <Link href="/login">
    <a>
    <Icon name="arrow right" />
    Login to your account
    </a>
    </Link>,
  },
  {
    childKey: 3,
    image: "/undraw_preferences_uuo2.svg",
    header: 'Fourth Step',
    description: 'After logging in you are now ready to request your room identifier from the dashboard.',
    meta: 'Request your unique room identifier',
    extra: <Link href="/dashboard/tokens">
    <a>
    <Icon name="arrow right" />
    Go to request page
    </a>
    </Link>,
  },
  {
    childKey: 4,
    image: "/undraw_social_girl_562b.svg",
    header: 'Fifth Step',
    description: 'You can share your newly created identifier with your friends, family, or anyone you want.',
    meta: 'Share the identifier with others',
    extra: <Link href="/contact">
    <a>
    <Icon name="arrow right" />
    Ask for help
    </a>
    </Link>,
  },
  {
    childKey: 5,
    image: "/undraw_confirmation_2uy0.svg",
    header: 'Sixth Step',
    description: 'You are ready! Just grab your identifier and enter it into the chat application when prompted.',
    meta: 'Connect to the chat with your identifier',
    extra: <Link href="/chat">
    <a>
    <Icon name="arrow right" />
    Enter the chat
    </a>
    </Link>,
  },
]

const pageTitle = "WebChat - About";

interface Props {

}

const styles = {
  wrapperSegment: { margin: '1em'},
  gridRow: { padding: "2em" },
  gridColumn: {padding: "1em"},
  divider: { margin: '3em 0em', textTransform: 'uppercase' }
};

const About = (props: Props) => {
  return (
    <Layout page="about">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Segment style={styles.wrapperSegment} >
        <Header as='h1' color='teal' textAlign='center'>
          <Icon name="info" /> Want to know how to start? See below!
      </Header>
        <Grid columns="equal" stackable container>
          <Grid.Row centered style={styles.gridRow}>
            <Grid.Column width={12} style={styles.gridColumn}>
            <Item.Group items={items} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Divider
                as='h4'
                horizontal
                style={styles.divider}
              >
                <Link href="/contact"><a>I have more questions</a></Link>
              </Divider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Layout>
  )
}

export default About