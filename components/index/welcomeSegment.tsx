

import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import Link from 'next/link'

interface Props {

}

const styles = {
  wrapperSegment: { padding: '8em 0em' },
  header: { fontSize: '2em' },
  contentText: { fontSize: '1.33em' },
  imageStyle: { margin: 'auto' }
};

const WelcomeSegment = (props: Props) => {
  return (
    <Segment style={styles.wrapperSegment} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={styles.header}>
              We Help People Connect With Each Other
          </Header>
            <p style={styles.contentText}>
              We can give you or your company superpowers to do things that they never thought possible.
              Let us delight you or your customers and empower your needs... through professional chat services.
          </p>
            <Header as='h3' style={styles.header}>
              We Make Free Text, Voice, and Video Chat
          </Header>
            <p style={styles.contentText}>
              Yes that's right, you thought it was the stuff of dreams, but it's reality.
          </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='large' src='/undraw_online_discussion_5wgl.svg' style={styles.imageStyle} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Link href="/about"><Button size='huge'>Start Now</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default WelcomeSegment
