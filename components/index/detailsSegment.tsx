import React from 'react'
import {
  Divider,
  Header,
  Segment,
  Grid,
  Image,
} from 'semantic-ui-react'
import Link from 'next/link'

interface Props {

}

const styles = {
  wrapperSegment: { padding: '8em 0em' },
  header: { fontSize: '1.33em' },
  contentText: { fontSize: '1.33em' },
  imageStyle: {margin: "auto"}
};

const DetailsSegment = (props: Props) => {
  return (
    <Segment style={styles.wrapperSegment} vertical>
      <Grid columns="equal" stackable>
        <Grid.Row centered>
          <Grid.Column width={12} textAlign="center">
            <Image size="medium" src='/undraw_modern_design_v3wv.svg' style={styles.imageStyle} />
              <Header as='h6' style={styles.header}>
                Install it like an application
              </Header>
              <p style={styles.contentText}>
                Add to your home screen, or install it on your desktop by clicking on the popup
              </p>
          </Grid.Column>
          <Grid.Column width={12}>
          <Divider
            section
          >
          </Divider>
          </Grid.Column>
          <Grid.Column width={12} textAlign="center">
            <Image size="medium" src='/undraw_group_video_el8e.svg' style={styles.imageStyle} />
              <Header as='h6' style={styles.header}>
                Group voice and video chat
              </Header>
              <p style={styles.contentText}>
                Tired of texting? Just use our video and voice features. You can even make a conference call!
              </p>
          </Grid.Column>
          <Grid.Column width={12}>
          <Divider
            section
          >
          </Divider>
          </Grid.Column>
          <Grid.Column width={12} textAlign="center">
            <Image size="large" src='/undraw_share_link_qtxe.svg' style={styles.imageStyle} />
              <Header as='h6' style={styles.header}>
                Easy join
              </Header>
              <p style={styles.contentText}>
                Just share your unique room number with anyone so they can join your session
              </p>
          </Grid.Column>
          <Grid.Column width={12}>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <Link href="/register"><a>Register now</a></Link>
          </Divider>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DetailsSegment
