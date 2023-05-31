import React, { ChangeEvent, useRef, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { list } from './configs';
import CarouselShow from './carousel';

export default function HomePage() {
  const arr = [
    IMAGE_PATH.ITEM1,
    IMAGE_PATH.ITEM2,
    IMAGE_PATH.ITEM3,
    IMAGE_PATH.ITEM4,
    IMAGE_PATH.ITEM5,
    IMAGE_PATH.ITEM6,
    IMAGE_PATH.ITEM7,
    IMAGE_PATH.ITEM8,
    IMAGE_PATH.ITEM9,
  ];
  const arr1 = [
    IMAGE_PATH.VIETTEL,
    IMAGE_PATH.VIN,
    IMAGE_PATH.VTV,
    IMAGE_PATH.TRUE,
    IMAGE_PATH.VIETTEL,
    IMAGE_PATH.VIN,
    IMAGE_PATH.VTV,
    IMAGE_PATH.TRUE,
  ];
  const carouselRef = useRef<CarouselRef>(null);
  const [isActive, setIsActive] = useState(false);
  const [input, setValueInput] = useState('');

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    input.length === 0 ? console.log(null) : console.log(input);
    setValueInput('');
    evt.preventDefault();
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValueInput(evt.target.value);
  };

  const clearInput = () => {
    setValueInput('');
    setIsActive(false);
  };
  return (
    <div>
      <div className="bg-main background h-[1550px] text-center">
        <div className="container m-auto">
          <div>
            <h1 className="mt-0 text-white text-5xl pt-8">
              The Video Platform
              <br />
              To Build Fast and Scale Big
            </h1>
            <p className="text-xl font-medium text-white">
              Unlock business value with reliable streaming from a trusted
              partner.
            </p>
            <div className={`wrapper ${isActive ? 'active' : ''} `}>
              <div className="input-holder">
                <input
                  type="text"
                  className="input"
                  placeholder="Email Address"
                  value={input}
                  onChange={handleInputChange}
                />
                <button className="icon " onClick={handleClick}>
                  <p className="text-main font-semibold text-base m-auto">
                    Get Started For Free
                  </p>
                </button>
              </div>
              <span className="close" onClick={clearInput}></span>
            </div>
          </div>
          <img src={IMAGE_PATH.VIDEO} alt="#" />
          <h1 className=" text-white text-5xl mt-12 ">Our Products</h1>
          <div className="flex items-center pt-10 justify-between">
            <CarouselShow list={arr} />
          </div>
        </div>
      </div>
      <div className="container m-auto text-center mt-20">
        <h1 className="text-3xl">
          <span className="text-main">Why</span> choose Sigma ?
        </h1>
        <div className="grid grid-cols-2 mt-32">
          <img alt="#" src={IMAGE_PATH.POLYGON} />
          <div className="grid grid-rows-[70px, 70px, 70px, 70px, 70px]  text-left w-[500px] ">
            {list.map((val, index) => (
              <div key={index} className="flex items-center">
                <hr className="hr" />
                <p className="text-xl leading-5 m-0 font-medium">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[250px] mt-[135px] bg-main rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[40px] rounded-br-[40px]">
          <div className="mx-8 pt-12 h-32 grid grid-cols-4 gap-x-4 text-white">
            <div className="flex flex-col  ">
              <h1 className="text-5xl m-0">25M+</h1>
              <h2>Clients Devices</h2>
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-5xl m-0">5+</h1>
              <h2>
                Year Of OTT <br /> Innovation
              </h2>
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-5xl m-0">99%</h1>
              <h2>
                Customer <br />
                Satisfaction Rating
              </h2>
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-5xl m-0">24/7</h1>
              <h2>Online Support</h2>
            </div>
          </div>
        </div>
        <div className="relative top-[-70px] px-5 pt-8 grid h-[244px] grid-cols-2">
          <div
            id="item-content"
            className="flex justify-between mr-2 rounded-2xl bg-white "
          >
            <div className="m-10 text-left flex flex-col justify-between">
              <div>
                <h1 className="text-main text-2xl m-0 font-extrabold">
                  Vietnam Digital Awards 2020
                </h1>
                <p className="text-xl">
                  “Two winning products are Sigma DRM and Sigma Livestreaming.”
                </p>
              </div>
              <p className="m-0 font-bold text-[#A5A5A5]">
                Prize : Digital conversion solution
              </p>
            </div>
            <img alt="#" src={IMAGE_PATH.AWARD} className="w-14 h-20 m-5" />
          </div>
          <div
            id="item-content"
            className="flex justify-between ml-2 rounded-2xl bg-white "
          >
            <div className="m-10 text-left flex flex-col justify-between">
              <div>
                <h1 className="text-main text-2xl m-0 font-extrabold">
                  VietSolution 2020
                </h1>
                <p className="text-xl">
                  "Sigma DRM reached the top 10 finalists"
                </p>
              </div>
              <p className="m-0 font-bold text-[#A5A5A5]">
                Prize : Digital conversion solution
              </p>
            </div>
            <img alt="#" src={IMAGE_PATH.AWARD} className="w-14 h-20 m-5" />
          </div>
        </div>
        <h1 className="text-3xl">
          <span className="text-main ">Our</span> customer
        </h1>
        <div className="flex items-center pt-10 justify-between">
          <LeftOutlined
            className=" text-5xl arrow"
            onClick={() => {
              carouselRef.current?.prev();
            }}
          />
          <div className="w-[1110px]">
            <Carousel draggable dots={false} slidesToShow={4} ref={carouselRef}>
              {arr1.map((val, index) => (
                <div key={index} className="outline-none  border-none">
                  <img
                    className="w-[170px] h-[102px] m-auto "
                    alt="#"
                    src={val}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <RightOutlined
            className=" text-5xl arrow"
            onClick={() => {
              carouselRef.current?.next();
            }}
          />
        </div>
      </div>
      <div className="bg-[#F9F9F9] h-[1105px] mt-28">
        <div className="container m-auto flex">
          <img alt="#" src="./images/home/image1.svg" />
          <div className='mx-10'> 
          <h1 className='text-xl'>Thu Do Multimedia’s Sigma DRM completed Farncombe Security Audit®</h1></div>
        </div>
      </div>
    </div>
  );
}
