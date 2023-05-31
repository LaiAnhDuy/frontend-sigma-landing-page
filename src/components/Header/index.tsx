import React, { useState } from 'react';
import './index.style.scss';
import DropDown from './Dropdown';
import { menuItems } from './menuItems';
import { Link } from 'react-router-dom';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { IMAGE_PATH } from 'src/constants/images';

// const logo = process.env.PUBLIC_URL + '/images/Logo.svg';
export default function Header() {
  const [activeHeader, setActiveHeader] = useState(true);

  const handleClickMenu = () => {
    setActiveHeader(false);
  };
  const handleClickHeader = () => {
    setActiveHeader(true);
  };

  return (
    <div
      className={`flex ${
        activeHeader ? 'header' : 'header2 relative shadow-lg'
      } justify-center `}
    >
      <div className=" lg:container  items-center flex justify-around  ">
        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <div className="header-item ">
          <Link to={'/'}>
            <img
              id="img"
              alt="#"
              onClick={() => {
                handleClickHeader();
              }}
              src={
                activeHeader ? IMAGE_PATH.LOGO_WHITE : IMAGE_PATH.LOGO_ORANGE
              }
              className="image"
            />
          </Link>
        </div>
        <div className="flex header-item ">
          {menuItems.map((val, index) => (
            <DropDown
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
          <button
            onClick={() => {
              setActiveHeader(false);
            }}
            className={`cursor-pointer h-7 w-24 rounded mr-5 ${
              activeHeader ? ' support ' : ' support1 '
            } `}
          >
            Support
          </button>
          <button
            onClick={() => {
              setActiveHeader(false);
            }}
            className={`cursor-pointer h-7 w-24 rounded mr-5 ${
              activeHeader ? ' freetrial ' : ' freetrial1 '
            } `}
          >
            Free trial
          </button>
          <SearchOutlined
            style={{ color: `${activeHeader ? 'white' : 'black'}` }}
            className="text-xl mr-2"
          />
          <Select
            suffixIcon={
              <DownOutlined
                style={{ pointerEvents: 'none' }}
                className={`right-9 ${activeHeader ? 'arrow1' : 'arrow2'}`}
              />
            }
            defaultValue="vn"
            className={`bg-transparent w-[100px] ${activeHeader ? ' select' : 'select1'}`}
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
        </div>
      </div>
    </div>
  );
}
