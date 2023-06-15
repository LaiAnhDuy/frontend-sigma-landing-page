/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

import './index.style.scss';
import { LIST_CAROUSEL } from './configs';

function CarouselShow() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <>
      <LeftCircleOutlined
        className="text-[#4D4D4D] text-5xl"
        onClick={() => {
          carouselRef.current?.prev();
        }}
      />
      <div className="max-w-[1110px]  min-w-0">
        <Carousel draggable dots={false} slidesToShow={4} ref={carouselRef}>
          {LIST_CAROUSEL.map((e, index) => (
            <div key={index} className="cursor-pointer">
              <div className="rounded-[10px] bg-white shadow-lg h-[270px] m-[20px] p-[20px] text-[16px] hover:bg-[#4D4D4D] hover:text-white">
                <div className="h-[120px]">
                  <img className="" src={e.img} alt="" />
                </div>
                <div className="font-bold !text-main mb-[20px]">{e.title}</div>
                <div className="">{e.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <RightCircleOutlined
        className="text-[#4D4D4D] text-5xl"
        onClick={() => {
          carouselRef.current?.next();
        }}
      />
    </>
  );
}

export default CarouselShow;
