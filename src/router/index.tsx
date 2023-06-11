import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import PublicRoute from 'src/components/PublicRoute';
import ROUTE from 'src/constants/route';
import HomePage from 'src/pages/Home';
import ResourcePage from 'src/pages/Resources';
import Blog from 'src/pages/Resources/Blog';
import SigmaTRANSCODERPage from 'src/pages/Products/SigmaTranscoder';

export type RouteType = {
  path: ROUTE | string;
  title?: string;
  isPrivate?: boolean;
  element: () => JSX.Element;
};

const routes: RouteType[] = [
  { path: ROUTE.HOME, title: 'Home', element: HomePage },
  { path: ROUTE.BLOG, title: 'Blog', element: Blog },
  {
    path: ROUTE.RESOURCES,
    title: 'Resources',
    element: ResourcePage,
    isPrivate: true,
  },
  {
    path: ROUTE.PRODUCT_SIGMATRANSCODER,
    title: 'Product Sigma TRANSCODER',
    element: SigmaTRANSCODERPage,
    isPrivate: true,
  },
];

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => {
        const { isPrivate, element: Component } = route;
        return (
          <Route
            key={route.path}
            {...route}
            element={
              isPrivate ? (
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              ) : (
                <PublicRoute>
                  <Component />
                </PublicRoute>
              )
            }
          ></Route>
        );
      })}
    </Routes>
  );
}


