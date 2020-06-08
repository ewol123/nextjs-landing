import { Grid, Button, Form, Icon, Message } from 'semantic-ui-react'
import Link from "next/link";
import Head from "next/head";
import LoginLayout from '../components/loginLayout/loginLayout'
import { Component } from 'react';

const pageTitle = "WebChat - Register";

const styles = {
  wrapperGrid: {
    height: '100vh'
  },
  wrapperColumn: { maxWidth: 550 }
};


interface Props {
  
}

interface State {
  isTOSAccepted: boolean
}

class Register extends Component<Props, State> {
  state: State = {
    isTOSAccepted: false
  }

  toggle = () => this.setState((prevState) => ({ isTOSAccepted: !prevState.isTOSAccepted }))

  render() {
    return (
      <LoginLayout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Grid textAlign='center' style={styles.wrapperGrid} verticalAlign='middle'>
          <Grid.Column style={styles.wrapperColumn}>
            <Message
              attached
              header='Welcome to our site!'
              content='Fill out the form below to sign-up for a new account'
            />
            <Form className='attached fluid segment'>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='First Name'
                  placeholder='First Name'
                  type='text'
                />
                <Form.Input
                  fluid
                  label='Last Name'
                  placeholder='Last Name'
                  type='text'
                />
              </Form.Group>
              <Form.Input label='Email' placeholder='Email' type='text' />
              <Form.Input label='Password' type='password' />
              <Form.Input label='Password again' type='password again' />
              <Form.Checkbox inline label='I agree to the terms and conditions' onChange={this.toggle} checked={this.state.isTOSAccepted} />
              <Button color='blue' disabled={!this.state.isTOSAccepted} >Submit</Button>
            </Form>
            <Message attached='bottom' warning>
              <Icon name='help' />
              <Link href="/login">
                <span>Already signed up?&nbsp;<a>Login here</a>&nbsp;instead.</span>
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
}

export default Register
