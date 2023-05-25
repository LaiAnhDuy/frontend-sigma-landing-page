import React from 'react'
import BaseLayout from '../BaseLayout'
import { Route } from 'react-router-dom'
import { RouteType } from 'src/router'

const PublicRoute: React.FC<RouteType> = (props) => {
  return (
    <Route
      path={props.path}
      element={<BaseLayout>{props.component}</BaseLayout>}
    />
  )
}

export default PublicRoute
