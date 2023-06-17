import React, { useEffect } from 'react';
import BaseLayout from '../BaseLayout';
import useDocumentTitle from 'src/hooks';

type PrivateRouteProps = {
  title?: string;
  children: React.ReactNode;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  // FIXME: check authorization
  useDocumentTitle(props.title);
  return <BaseLayout>{props.children}</BaseLayout>;
};

export default PrivateRoute;
