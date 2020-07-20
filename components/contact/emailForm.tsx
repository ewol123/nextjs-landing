import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import { Grid, Form, Message, Image, Responsive } from 'semantic-ui-react'
import getWidth from "../../lib/getWidth";

interface Props {

}
interface State {
  feedback: string,
  name: string,
  email: string,
  formLoading: boolean
}

const styles = {
  wrapperGrid: {
    height: '100vh'
  },
  wrapperColumn: { maxWidth: 550 },
  textArea: { width: '100%', height: '150px' },
  contactImage: {margin: "auto"}
};

class EmailForm extends Component<Props, State> {
  state: State = {
    feedback: '', name: '', email: '', formLoading: false
  }

  setTextArea = (event) => this.setState({ feedback: event.target.value });
  setName = (event) => this.setState({ name: event.target.value });
  setEmail = (event) => this.setState({ email: event.target.value });


  handleSubmit = (event) => {
    const templateId = 'template_2XebtMDt';
    this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
  };

  sendFeedback = (templateId, variables) => {

    this.setState({ formLoading: true });

    emailjs.send('gmail', templateId, variables, 'user_NBQo0yTlnz4J3TITl2tZc')
      .then((response) => {
        this.setState({ feedback: '', name: '', email: '',formLoading: false });
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        this.setState({ formLoading: false });
        console.log('FAILED...', err);
      });
  }

  render() {
    return (
      <Grid textAlign='center' style={styles.wrapperGrid} verticalAlign='middle'>
        
        <Grid.Column style={styles.wrapperColumn}>

        <Responsive getWidth={getWidth} minWidth={Responsive.onlyMobile.maxWidth}  >
        <Image src="/undraw_contact_us_15o2.svg" size="large" style={styles.contactImage}/>
        </Responsive>

        
          <Message
            attached
            header='Do you have a problem?'
            content='Let us help! Fill out the form below and send us an email'
            id="contact-text1"
          />
          <Form className='attached fluid segment' loading={this.state.formLoading}>
            <Form.Input label='Name' placeholder='Name' type='text' required onChange={this.setName} value={this.state.name} />
            <Form.Input label='Email' placeholder='Email' type='email' required onChange={this.setEmail} value={this.state.email} />
            <Form.TextArea placeholder='Tell us more' onChange={this.setTextArea} required value={this.state.feedback} style={styles.textArea} />
            <Form.Button type="submit" color='blue' onClick={this.handleSubmit}>Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EmailForm

