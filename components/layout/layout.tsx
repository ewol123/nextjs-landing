import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import ResponsiveContainer from "./responsiveContainer";
import Footer from "./footer";

const siteTitle = "WebChat";

const styles = {
  backToHome: {
    margin: "3rem 0 0"
  },
};

interface Props {
  children: React.ReactNode
  home?: boolean,
  page: string
}

const Layout = (props: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="sample webchat app running on kubernetes"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ResponsiveContainer page={props.page}>
        <main>{props.children}</main>
        <Footer/>
      </ResponsiveContainer>
      <header>
      </header>
    </div>
  )
}

export default Layout


