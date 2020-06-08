import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import getWidth from "../../lib/getWidth";
import Link from 'next/link'

interface Props {
  children: React.ReactNode,
  page: string
}
interface State {
  fixed: boolean
}

const styles = {
  signUpButton: {
    marginLeft: '0.5em'
  },
  containerSegment: {
    padding: '1em 0em'
  }
};


class DesktopContainer extends Component<Props, State> {
  state = {
    fixed: false
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}  >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={styles.containerSegment}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item active={this.props.page === "home"}>
                  <Link href="/index"><a>Home</a></Link>
                  </Menu.Item>
                <Menu.Item active={this.props.page === "about"}>
                  <Link href="/about"><a>About</a></Link>
                </Menu.Item>
                <Menu.Item  active={this.props.page === "contact"}>
                  <Link href="/contact"><a>Contact</a></Link>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>

    )
  }
}

export default DesktopContainer
