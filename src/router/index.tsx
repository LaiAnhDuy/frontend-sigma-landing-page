import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from 'src/components/BaseLayout'
import HomePage from 'src/pages/HomePage'
import ResourcePage from 'src/pages/ResourcePage'
interface RouteType {
  component: React.ReactNode
  path: string
}

const routes: RouteType[] = [
  { path: '/', component: <HomePage /> },

  {
    path: '/resource',
    component: <ResourcePage />,
  },
]

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={<BaseLayout>{item.component}</BaseLayout>}
        />
      ))}
    </Routes>
  )
}
