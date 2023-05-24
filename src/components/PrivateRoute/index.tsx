import React from 'react'
import BaseLayout from '../BaseLayout'
import { Route } from 'react-router-dom'
import { RouteType } from 'src/router'

const PrivateRoute = (route: RouteType) => {
    // FIXME: check authorization

  return (
    <Route
      path={route.path}
      element={<BaseLayout>{route.component}</BaseLayout>}
    />
  )
}

export default PrivateRoute
