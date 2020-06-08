import PropTypes from 'prop-types'
import React from 'react'

import  DesktopContainer from "./desktopContainer";
import  MobileContainer  from "./mobileContainer";

  interface Props {
   children: React.ReactNode,
   page: string
  }
  
  const ResponsiveContainer = (props: Props) => {
    return (
        <div>
        <DesktopContainer page={props.page} >{props.children}</DesktopContainer>
        <MobileContainer page={props.page}>{props.children}</MobileContainer>
      </div>
      )
  }
  export default ResponsiveContainer
