import React from 'react'
import {
  Grid,
  Segment,
  Icon,
  SemanticICONS
} from 'semantic-ui-react'

interface Props {

}

const styles = {
  wrapperSegment: {
    padding: '0em'
  },
  supportedIcons: { paddingBottom: '3em', paddingTop: '5em' },
  supportedText: { paddingLeft: '5em', paddingRight: '5em', paddingBottom: '3em', fontSize: '1.3em', color: 'grey' }
};

const CompatibilitySegment = (props: Props) => {
  const icons: SemanticICONS[] = ["apple", "windows", "linux", "android", "chrome", "firefox", "safari"];

  return (
    <Segment style={styles.wrapperSegment} vertical>
      <Grid columns='equal' stackable>
        <Grid.Row textAlign='center'>
          {
            icons.map((icon,index) => <Grid.Column key={index} style={styles.supportedIcons}>
              <Icon name={icon} size="huge" />
            </Grid.Column>)
          }
        </Grid.Row>
        <Grid.Row centered >
          <Grid.Column style={styles.supportedText} width={12} textAlign="center" >
          <p>Works on all platforms, use it in your favourite browser, or install it to your desktop / home screen</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default CompatibilitySegment
