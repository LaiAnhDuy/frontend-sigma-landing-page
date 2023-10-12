/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Login from 'src/pages/Login';
import './index.style.scss';
import Register from 'src/pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ROUTE from 'src/constants/route';
import randomColor from 'randomcolor';
import { AuthTypes } from 'src/types/Auth';
import { removeUser, updateLoginState } from 'src/redux/auth/action';

interface UserProps {
  user: string;
}

export default function User({ user }: UserProps) {
  const [option, setOption] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth: any = useSelector(
    (state: { authReducer: AuthTypes }) => state.authReducer.user,
  );
  const logIn: boolean = useSelector(
    (state: { authReducer: AuthTypes }) => state.authReducer.logIn,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModalSignIn = () => {
    setIsModalOpen(true);
    setOption(true);
  };
  const showModalSignUp = () => {
    setIsModalOpen(true);
    setOption(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(updateLoginState(true));
  };
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    dispatch(removeUser());
    dispatch(updateLoginState(false));
    navigate(ROUTE.HOME);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const postPage = () => {
    navigate(ROUTE.ADMIN);
  };
  const items1: MenuProps['items'] = [
    {
      label: <div onClick={showModalSignIn}>Sign in</div>,
      key: '0',
    },
    {
      label: <div onClick={showModalSignUp}>Sign up</div>,
      key: '1',
    },
  ];
  const items2: MenuProps['items'] = [
    auth.role === 'admin'
      ? {
          label: <div onClick={postPage}>Admin</div>,
          key: '0',
        }
      : null,
    {
      label: <div onClick={logOut}>Log out</div>,
      key: '1',
    },
  ];

  const overlayStyle = {
    paddingTop: '8px',
  };
  const userName = auth.firstName;
  const avatar = userName?.charAt(0).toUpperCase();
  const bgColor = randomColor({ luminosity: 'light' });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(updateLoginState(true));
    }
  }, [dispatch]);
  return (
    <div className="ml-3 cursor-pointer">
      <Dropdown
        menu={{ items: logIn ? items2 : items1 }}
        trigger={['click']}
        overlayStyle={overlayStyle}
        className="user"
        placement="bottomRight"
      >
        {!logIn ? (
          <div
            className={`border-solid rounded-full  border-[1px]  w-6 text-center bg-transparent text-white h-6 ${user} `}
          >
            <UserOutlined />
          </div>
        ) : (
          <div
            className={`border-solid rounded-full  border-[1px]  w-6 text-center bg-transparent text-white h-6 ${user} `}
            style={{ backgroundColor: bgColor }}
          >
            {avatar}
          </div>
        )}
      </Dropdown>
      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        closable={false}
        onCancel={handleCancel}
        width={'fit-content'}
      >
        {option ? (
          <Login
            signIn={handleOk}
            onClick={showModalSignUp}
            handleForgot={handleCancel}
          />
        ) : (
          <Register onClick={showModalSignIn} signUp={handleCancel} />
        )}
      </Modal>
    </div>
  );
}
