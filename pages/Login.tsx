import { Icon, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Link from "next/link";
import Head from "next/head";
import LoginLayout from '../components/loginLayout/loginLayout'

const pageTitle = "WebChat - Login";


interface Props {

}

const styles = {
  wrapperGrid: {
    height: '100vh'
  },
  wrapperColumn: { maxWidth: 450 }
};

const Login = (props: Props) => {
  return (
    <LoginLayout >
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Grid textAlign='center' style={styles.wrapperGrid} verticalAlign='middle'>
        <Grid.Column style={styles.wrapperColumn}>
          <Header as='h2' color='teal' textAlign='center'>
            <Icon name="sign in" /> Log-in to your account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
                Login
          </Button>
            </Segment>
          </Form>
          <Message>
            <Link href="/register">
              <span>New to us? <a>Sign Up</a></span>
            </Link>
          </Message>
          <Message>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </LoginLayout>
  )
}

export default Login

