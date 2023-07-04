import { UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Modal } from 'antd';
import React, { useState } from 'react';
import Login from 'src/pages/Login';
import './index.style.scss';
import Register from 'src/pages/Register';

interface UserProps {
  user: string;
}

export default function User({ user }: UserProps) {
  const [logIn, setLogIn] = useState(false);
  const [option, setOption] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalSignIn = () => {
    setIsModalOpen(true);
    setOption(true);
  };
  const showModalSignUp = () => {
    setIsModalOpen(true);
    setOption(false);
  };

  const handleOk = () => {
    // setIsModalOpen(false);
    // setLogIn(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    {
      label: <div>Profile</div>,
      key: '0',
    },
    {
      label: (
        <div
          onClick={() => {
            setLogIn(false);
          }}
        >
          Log out
        </div>
      ),
      key: '1',
    },
  ];
  const overlayStyle = {
    paddingTop: '8px',
  };

  return (
    <div className="ml-3 cursor-pointer">
      <Dropdown
        menu={{ items: logIn ? items2 : items1 }}
        trigger={['click']}
        overlayStyle={overlayStyle}
        className="user"
        placement="bottomRight"
      >
        {logIn ? (
          <div
            className={`border-solid rounded-full  border-[1px]  w-6 text-center bg-transparent text-white h-6 ${user} `}
          >
            <UserOutlined />
          </div>
        ) : (
          <div
            className={`border-solid rounded-full  border-[1px]  w-6 text-center bg-transparent text-white h-6 ${user} `}
          >
            <UserOutlined />
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
        // closable={false}
      >
        {option ? (
          <Login signIn={handleOk} onClick={showModalSignUp} />
        ) : (
          <Register onClick={showModalSignIn} />
        )}
      </Modal>
    </div>
  );
}
