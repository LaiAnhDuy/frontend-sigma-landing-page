import React from 'react'
import BaseLayout from '../BaseLayout'
import { Route } from 'react-router-dom'
import { RouteType } from 'src/router'

const PublicRoute = (route: RouteType) => {
  return (
    <Route
      path={route.path}
      element={<BaseLayout>{route.component}</BaseLayout>}
    />
  )
}

export default PublicRoute
