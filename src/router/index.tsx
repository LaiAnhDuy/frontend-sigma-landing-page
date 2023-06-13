import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import PublicRoute from 'src/components/PublicRoute';
import ROUTE from 'src/constants/route';
import HomePage from 'src/pages/Home';
import Register from 'src/pages/Register';
import Login from 'src/pages/Login';
import Multi from 'src/pages/Products/Multi-CDN';
import Audio from 'src/pages/Products/Audio';
import ResourcePage from 'src/pages/Resources';
import SigmaDAIPage from 'src/pages/Products/SigmaDai';
import Blog from 'src/pages/Resources/Blog';
import SigmaN53Page from 'src/pages/Products/SigmaN53';
import SigmaPackagePage from 'src/pages/Products/SigmaPackage';
import SigmaTranscoderPage from 'src/pages/Products/SigmaTranscoder';

export type RouteType = {
  path: ROUTE | string;
  title?: string;
  isPrivate?: boolean;
  element: () => JSX.Element;
};

const routes: RouteType[] = [
  { path: ROUTE.HOME, title: 'Home', element: HomePage },
  { path: ROUTE.REGISTER, title: 'Register', element: Register },
  { path: ROUTE.LOGIN, title: 'Login', element: Login },
  { path: ROUTE.BLOG, title: 'Blog', element: Blog },
  { path: ROUTE.NEW, title: 'New', element: Blog },
  { path: ROUTE.MULTI, title: 'Multi CDN', element: Multi },
  {
    path: ROUTE.AUDIO_WATERMARKING,
    title: 'Audio Watermarking',
    element: Audio,
  },
  {
    path: ROUTE.RESOURCES,
    title: 'Resources',
    element: ResourcePage,
    isPrivate: true,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_NS53,
    title: 'Product Sigma NS53',
    element: SigmaN53Page,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_DAI,
    title: 'Product Sigma DAI',
    element: SigmaDAIPage,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_PACKAGE,
    title: 'Product Sigma Package',
    element: SigmaPackagePage,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_TRANSCODER,
    title: 'Product Sigma Transcoder',
    element: SigmaTranscoderPage,
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
