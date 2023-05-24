import React from 'react'
import { Routes } from 'react-router-dom'
import PrivateRoute from 'src/components/PrivateRoute'
import PublicRoute from 'src/components/PublicRoute'
import HomePage from 'src/pages/Home'
import ResourcePage from 'src/pages/Resources'
export interface RouteType {
  component: React.ReactNode
  path: string
  isPrivate?: boolean
}

const routes: RouteType[] = [
  { path: '/', component: <HomePage /> },

  {
    path: '/resource',
    component: <ResourcePage />,
    isPrivate: true,
  },
]

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((item: RouteType, index) => {
        if (item?.isPrivate) {
          return <PrivateRoute key={item.path} {...item} />
        }
        return <PublicRoute key={item.path} {...item} />
      })}
    </Routes>
  )
}
