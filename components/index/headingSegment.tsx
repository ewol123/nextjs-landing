import React from 'react'
import {
  Button,
  Header,
  Icon,
  Segment,
  Grid,
  Image
} from 'semantic-ui-react'
import Link from "next/link";

interface Props {
  mobile?: boolean
}

const HeadingSegment = (props: Props) => {

  const styles = {
    wrapperSegment: {
      minHeight: 700,
      padding: '1em 0em'
    },
    mainHeader: {
      fontSize: props.mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: props.mobile ? '1.5em' : '3em',
    },
    subHeader: {
      fontSize: props.mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: props.mobile ? '0.5em' : '1.5em',
    }
  };

  return (
    <Segment
      inverted
      textAlign='center'
      style={styles.wrapperSegment}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row textAlign='center'>
          <Grid.Column width={7}>
            <Header
              as='h1'
              content='Chat everywhere'
              inverted
              style={styles.mainHeader}
              id="heading-text1"
            />
            <Header
              as='h2'
              content='As much as you want, for free'
              inverted
              style={styles.subHeader}
            />
            <Link href="/about">
            <Button primary size='huge'>
              Get Started
            <Icon name="arrow right" />
            </Button>
            </Link>
          </Grid.Column>
          <Grid.Column floated='right' width={9}>
            <Image size='huge' src='/undraw_work_chat_erdt.svg' />
          </Grid.Column>

        </Grid.Row>
      </Grid>

    </Segment>

  )
}

HeadingSegment.defaultProps = {
  mobile: false
};

export default HeadingSegment

