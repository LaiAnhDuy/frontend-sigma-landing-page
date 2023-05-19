import React, { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'

interface BaseLayoutProps {
  children: ReactNode
}

function BaseLayout(props: BaseLayoutProps) {
  return (
    <>
      <Header />  
      {props.children}
      <Footer />
    </>
  )
}

export default BaseLayout
