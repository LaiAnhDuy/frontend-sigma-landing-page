import React, { useEffect, useState } from 'react';
import './index.style.scss';
import DropDown from './Dropdown';
import { menuItems } from './menuItems';
import { Link, useLocation } from 'react-router-dom';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { IMAGE_PATH } from 'src/constants/images';
import User from './User';
import ROUTE from 'src/constants/route';
import { useDispatch } from 'react-redux';
import { addUser } from 'src/redux/auth/action';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [activeHeader, setActiveHeader] = useState(true);

  const handleClickMenu = () => {
    setActiveHeader(false);
  };
  const handleClickHeader = () => {
    setActiveHeader(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const auth = localStorage.getItem('user');
    

    if (token && auth) {
      const authData: string[] = JSON.parse(auth);
      dispatch(addUser({ token, user: authData, logIn: true }));
    }
  });
  return (
    <div
      className={`flex ${
        activeHeader && path === '/'
          ? 'header'
          : `header2 relative ${path === '/' ? ' shadow-lg' : null}`
      } justify-center `}
    >
      <div className=" lg:container  items-center flex justify-around  ">
        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <div className="header-item ">
          <Link to={ROUTE.HOME}>
            <img
              id="img"
              alt="#"
              onClick={handleClickHeader}
              src={
                activeHeader && path === '/'
                  ? IMAGE_PATH.LOGO_WHITE
                  : IMAGE_PATH.LOGO_ORANGE
              }
              className="image"
            />
          </Link>
        </div>
        <div className="flex header-item ">
          {menuItems.map((val, index) => (
            <DropDown
              route={val.route}
              path={path}
              hoverText={val.name}
              menuItems={val.item}
              key={index}
              activeHeader={activeHeader}
              clickHeader={() => {
                handleClickMenu();
              }}
            />
          ))}
        </div>
        <div className="header-item flex justify-end">
          <Link to={ROUTE.SUPPORT}>
            <button
              onClick={() => {
                setActiveHeader(false);
              }}
              className={`cursor-pointer h-7 w-24 rounded mr-5 ${
                activeHeader && path === '/' ? ' support ' : ' support1 '
              } `}
            >
              Support
            </button>
          </Link>
          <Link to={ROUTE.FREE_TRIAL}>
            <button
              onClick={() => {
                setActiveHeader(false);
              }}
              className={`cursor-pointer h-7 w-24 rounded mr-5 ${
                activeHeader && path === '/' ? ' freetrial ' : ' freetrial1 '
              } `}
            >
              Free trial
            </button>
          </Link>
          <SearchOutlined
            style={{
              color: `${activeHeader && path === '/' ? 'white' : 'black'}`,
            }}
            className="text-xl mr-2"
          />
          <Select
            bordered={false}
            suffixIcon={
              <DownOutlined
                style={{ pointerEvents: 'none' }}
                className={`right-9   ${
                  activeHeader && path === '/' ? 'arrow1' : 'arrow2'
                }`}
              />
            }
            defaultValue="vn"
            className={` w-[110px] ${
              activeHeader && path === '/' ? ' select' : 'select1'
            }`}
            options={[
              {
                value: 'usa',
                label: (
                  <div className="flex items-center ">
                    <img alt="#" src={IMAGE_PATH.USA} className="mr-1" />
                    Eng
                  </div>
                ),
              },
              {
                value: 'vn',
                label: (
                  <div className="flex items-center ">
                    <img alt="#" src={IMAGE_PATH.VN} className="mr-1" />
                    Vn
                  </div>
                ),
              },
            ]}
          />
          <User
            user={activeHeader && path === '/' ? ' support ' : ' support1 '}
          />
        </div>
      </div>
    </div>
  );
}
