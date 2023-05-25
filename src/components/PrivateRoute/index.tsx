import React from 'react'
import BaseLayout from '../BaseLayout'

type PrivateRouteProps = {
  title?: string
  children: React.ReactNode
}

const PrivateRoute = (props: PrivateRouteProps) => {
  // FIXME: check authorization

  return <BaseLayout>{props.children}</BaseLayout>
}

export default PrivateRoute
