import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import ROUTE from 'src/constants/route';

const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={backHome} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
