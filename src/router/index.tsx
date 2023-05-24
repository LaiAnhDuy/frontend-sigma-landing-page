import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from 'src/components/BaseLayout'
import HomePage from 'src/pages/Home'
import Register from 'src/pages/Register'
import ResourcePage from 'src/pages/Resources'
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
  {
    path: '/register',
    component: <Register /> 
  }
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
