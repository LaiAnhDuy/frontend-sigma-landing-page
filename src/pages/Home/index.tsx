import React, { ChangeEvent, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

export default function HomePage() {
  const arr = [
    "ITEM1",
    "ITEM2",
    "ITEM3",
    "ITEM4",
    "ITEM5",
    "ITEM6",
    "ITEM7",
    "ITEM8",
    "ITEM9"
  ];
  const [isActive, setIsActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const searchToggle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    evt.preventDefault();
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value);
  };

  const clearInput = () => {
    setSearchInput('');
    setIsActive(false);
  };
  return (
    <div>
      <div className="bg-main background h-[1670px] text-center">
        <div>
          <h1 className="mt-0 text-white text-5xl ">
            The Video Platform
            <br />
            To Build Fast and Scale Big
          </h1>
          <p className="text-xl font-medium text-white">
            Unlock business value with reliable streaming from a trusted
            partner.
          </p>
          <div className={`search-wrapper ${isActive ? 'active' : ''} `}>
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
                value={searchInput}
                onChange={handleInputChange}
              />
              <button className="search-icon " onClick={searchToggle}>
                <p className="text-main font-semibold text-base m-auto">
                  Get Started For Free
                </p>
              </button>
            </div>
            <span className="close" onClick={clearInput}></span>
          </div>
        </div>
        <img src={IMAGE_PATH.VIDEO} alt="#" />
        <h1 className=" text-white text-5xl ">Our Products</h1>
        <div className="flex items-center justify-center">
          <LeftCircleOutlined />
          <div className="w-[1110px]">
            <Carousel draggable dots={false}>
              {arr.map((val, index) => (
                <div key={index}  className='w-[262.5px] h-[268px]'>
                  <img  alt="#" src={""} />
                </div>
              ))}
            </Carousel>
          </div>
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
}
