import React, { ChangeEvent, useRef, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { list } from './configs';
import Item from 'src/components/Item';
import CarouselShow from './CarouselShow';
import ScrollToTopButton from 'src/components/ScrollToTop';
import ROUTE from 'src/constants/route';
import ButtonGeneral from 'src/components/Product/ButtonGeneral';

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
  const item = [
    {
      title: 'OTT market will triple in value by 2028',
      url: '#',
      id: '1',
      image: IMAGE_PATH.IMAGE2,
      option: 'new',
    },
    {
      title:
        'Infringement of copyrighted content makes it difficult for Vietnamese businesses',
      url: '#',
      id: '2',
      image: IMAGE_PATH.IMAGE3,
      option: 'new',
    },
    {
      title:
        'Digital businesses do not want to be "single" in the world market',
      url: '#',
      id: '3',
      image: IMAGE_PATH.IMAGE4,
      option: 'new',
    },
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
      <div className="bg-main background  text-center">
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
                <button className="icon w-fit " onClick={handleClick}>
                  <p className="text-main font-semibold text-base m-auto ">
                    Get Started For Free
                  </p>
                </button>
              </div>
              <span className="close" onClick={clearInput}></span>
            </div>
          </div>
          <img src={IMAGE_PATH.VIDEO} alt="#" />
          <h1 className=" text-white text-5xl mt-10 ">Our Products</h1>
          <div className="flex items-center py-7  justify-between">
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
      <div className="bg-[#F9F9F9]  mt-28 py-24">
        <div className="container bg-white mb-1 rounded-xl m-auto flex ">
          <img className=" absolute" alt="#" src={IMAGE_PATH.NEWS} />
          <img alt="#" src={IMAGE_PATH.IMAGE1} />
          <div className="px-10 pb-10  min-w-[250px] flex flex-col  justify-between">
            <div>
              <h1 className=" text-2xl">
                Thu Do Multimedia’s Sigma DRM completed Farncombe Security
                Audit®
              </h1>
              <h1 className="text-base">
                <span className="text-main ">Date:</span> 01/2020
                <br />
                <span className="text-main ">Location:</span>
                <span className="font-normal"> Ha Noi, Vietnam</span>
              </h1>
              <p className="text-lg ">
                The Farncombe Security Audit® is Cartesian’s independent
                specialist content security auditing service for content owners,
                broadcasters, video service providers, and technology suppliers
                worldwide.
              </p>
            </div>
            <div className="flex cursor-pointer w-fit">
              <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Learn more</p>
              <img alt="#" src={IMAGE_PATH.ARROW} />
            </div>
          </div>
        </div>
        <div className="grid mt-11 grid-cols-3 gap-x-8 m-auto container">
          {item.map((val, index) => (
            <Item
              key={index}
              title={val.title}
              image={val.image}
              option={val.option}
              id={val.id}
            />
          ))}
        </div>
      </div>
      <div className="container m-auto text-center">
        <h1 className="text-3xl text-main mt-12">Ready to Get Started ?</h1>
        <p className="text-xl font-medium">
          Start streaming today with our integrated video platform.
        </p>
        <div className="flex justify-center mb-24">
          <ButtonGeneral
            link={ROUTE.FREE_TRIAL}
            name="Free Trial"
            css="bg-main text-white w-[241px] active:bg-main/90"
          />
          <ButtonGeneral
            link={ROUTE.TALK_TO_EXPERT}
            name="Talk to expert"
            css="bg-white text-main w-[307px] active:bg-[#fafafa] "
          />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
