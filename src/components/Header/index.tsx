import React, { useState } from 'react';
import './index.style.scss';
import DropDown from './Dropdown';
import { menuItems } from './menuItems';
import { Link } from 'react-router-dom';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';

// const logo = process.env.PUBLIC_URL + '/images/Logo.svg';
export default function Header() {
  const [activeHeader, SetActiveHeader] = useState(true);

  const handleClickMenu = () => {
    SetActiveHeader(false);
  };
  const handleClickHeader = () => {
    SetActiveHeader(true);
  };

  return (
    <div
      className={`flex ${
        activeHeader ? 'header' : 'header_mau shadow-lg'
      } justify-center `}
    >
      <div className=" lg:container  items-center flex justify-around  ">
        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <div className="header-item text-center">
          <Link to={'/'}>
            <img
              id="img"
              alt="#"
              onClick={() => {
                handleClickHeader();
              }}
              src={`./images/${activeHeader ? 'Logo.svg' : 'Logo-mau.svg'}`}
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
        <div className="header-item flex">
          <button
            onClick={() => {
              SetActiveHeader(false);
            }}
            className={`cursor-pointer h-7 w-24 rounded mr-5 ${
              activeHeader ? ' support ' : ' support1 '
            } `}
          >
            Support
          </button>
          <button
            onClick={() => {
              SetActiveHeader(false);
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
            suffixIcon={<DownOutlined style={{ pointerEvents: 'none' }} className={`${activeHeader?"arrow1":"arrow2"}`} />}
            defaultValue="vn"
            style={{ width: 110 }}
            
            className={`bg-transparent ${activeHeader?" select" : "select1"}`}
            options={[
              {
                value: 'usa',
                label: (
                  <div className="flex items-center ">
                    <img alt="#" src="./images/usa.svg" className="mr-1" />
                    Eng
                  </div>
                ),
              },
              {
                value: 'vn',
                label: (
                  <div className="flex items-center">
                    <img alt="#" src="./images/vn.svg" className="mr-1" />
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
