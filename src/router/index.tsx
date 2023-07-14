import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'src/components/PrivateRoute';
import PublicRoute from 'src/components/PublicRoute';
import ROUTE from 'src/constants/route';
import HomePage from 'src/pages/Home';
import Multi from 'src/pages/Products/Multi-CDN';
import Audio from 'src/pages/Products/Audio';
import ResourcePage from 'src/pages/Resources';
import SigmaDAIPage from 'src/pages/Products/SigmaDai';
import Blog from 'src/pages/Resources/Blog';
import SigmaNS53Page from 'src/pages/Products/SigmaNS53';
import SigmaPackagePage from 'src/pages/Products/SigmaPackage';
import SigmaTranscoderPage from 'src/pages/Products/SigmaTranscoder';
import OttPage from 'src/pages/Service/Ott';
import SigmaLiveStreaming from 'src/pages/Products/Streaming';
import ForgotPassword from 'src/pages/Login/ForgotPassword';
import NotFoundPage from 'src/pages/NotFound';
import FreeTrial from 'src/pages/FreeTrial';
import SigmaDRM from 'src/pages/Products/SigmaDRM';
import SigmaInteractive from 'src/pages/Products/Interactive';
import Support from 'src/pages/Support';
import AboutUs from 'src/pages/AboutUs';
import ContactUs from 'src/pages/ContactUs';
import Admin from 'src/pages/Admin';

export type RouteType = {
  path: ROUTE | string;
  title?: string;
  isPrivate?: boolean;
  element: () => JSX.Element;
};

const routes: RouteType[] = [
  { path: ROUTE.HOME, title: 'Sigma DRM', element: HomePage },
  { path: ROUTE.BLOG, title: 'Blog', element: Blog },
  { path: ROUTE.NEW, title: 'New', element: Blog },
  { path: ROUTE.FREE_TRIAL, title: 'Free Trial', element: FreeTrial },
  { path: ROUTE.SUPPORT, title: 'Support', element: Support },
  { path: ROUTE.CONTACT_US, title: 'Contact us', element: ContactUs },
  { path: ROUTE.PRODUCT_MULTI_CDN, title: 'Multi CDN', element: Multi },
  { path: ROUTE.ABOUT_US, title: 'About us', element: AboutUs },
  { path: ROUTE.ADMIN, title: 'Admin', element: Admin },
  {
    path: ROUTE.PRODUCT_AUDIO_WATERMARKING,
    title: 'Audio Watermarking',
    element: Audio,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_LIVESTREAMING,
    title: 'Sigma Live Streaming',
    element: SigmaLiveStreaming,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_DRM,
    title: 'Sigma Digital Rights Management',
    element: SigmaDRM,
  },
  {
    path: ROUTE.PRODUCT_SIGMA_INTERACTIVE,
    title: 'Sigma Interactive',
    element: SigmaInteractive,
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
    element: SigmaNS53Page,
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
  {
    path: ROUTE.SERVICE,
    title: 'Service OTT',
    element: OttPage,
    isPrivate: false,
  },
  {
    path: ROUTE.FORGOT_PASSWORD,
    title: 'Forgot Password',
    element: ForgotPassword,
  },
  {
    path: '*',
    title: 'Not Found',
    element: NotFoundPage,
  },
];
export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => {
        const { isPrivate, element: Component } = route;
        const RouteWrapper = isPrivate ? PrivateRoute : PublicRoute;
        return (
          <Route
            key={route.path}
            {...route}
            element={
              <RouteWrapper title={route.title}>
                <Component />
              </RouteWrapper>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}
