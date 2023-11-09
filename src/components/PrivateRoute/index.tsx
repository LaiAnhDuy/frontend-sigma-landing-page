/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BaseLayout from '../BaseLayout';
import useDocumentTitle from 'src/hooks';
import { useSelector } from 'react-redux';
import { Button, Result } from 'antd';
import {  useNavigate } from 'react-router-dom';
import ROUTE from 'src/constants/route';
import { ROLE } from 'src/constants';

type PrivateRouteProps = {
  title?: string;
  children: React.ReactNode;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  useDocumentTitle(props.title);
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.authReducer.authData.token);
  const role = useSelector(
    (state: any) => state.authReducer.authData.user.role,
  );
  return (
    <BaseLayout>
      {token && role === ROLE.ADMIN ? (
        props.children
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button onClick={() => navigate(ROUTE.HOME)} type="primary">
              Back Home
            </Button>
          }
        />
      )}
    </BaseLayout>
  );
};

export default PrivateRoute;
