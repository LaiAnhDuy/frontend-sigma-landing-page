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
import { Button, Result } from 'antd';
import OttPage from 'src/pages/Service/Ott';
import SigmaLiveStreaming from 'src/pages/Products/Streaming';
import ContactUs from 'src/pages/Contact_us';
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
  { path: ROUTE.CONTACT_US, title: 'Contact_us', element: ContactUs },
  { path: ROUTE.PRODUCT_MULTI_CDN, title: 'Multi CDN', element: Multi },
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
    path: '*',
    title: 'Not Found',
    element: () => (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    ),
  },
  {
    path: ROUTE.SERVICE,
    title: 'Service OTT',
    element: OttPage,
    isPrivate: true,
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
