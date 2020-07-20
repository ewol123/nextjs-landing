import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import getWidth from '../../lib/getWidth';
import Link from 'next/link'


interface Props {
    children: React.ReactNode
    page: string
}
interface State {
    sidebarOpened: boolean
}

const styles = {
  signUpButton: {
    marginLeft: '0.5em'
  },
  containerSegment: {
    padding: '1em 0em'
  }
};

class MobileContainer extends Component<Props, State> {
    state = {
        sidebarOpened: false
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
          as={Sidebar.Pushable}
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item active={this.props.page === "home"}>
              <Link href="/index"><a>Home</a></Link>
            </Menu.Item>
            <Menu.Item active={this.props.page === "about"}>
              <Link href="/about"><a>About</a></Link>
            </Menu.Item>
            <Menu.Item active={this.props.page === "contact"}>
            <Link href="/contact"><a>Contact</a></Link>
            </Menu.Item>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={styles.containerSegment}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
}

export default MobileContainer


