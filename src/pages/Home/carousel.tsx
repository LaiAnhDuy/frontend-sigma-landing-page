/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import { DownOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

import './index.style.scss';

interface CarouselProps {
  list: string[];
}

function CarouselShow(props: CarouselProps) {
    const carouselRef = useRef<CarouselRef>(null);


  return (
    <>
      <LeftCircleOutlined
        className="text-white text-5xl"
        onClick={() => {
          carouselRef.current?.prev();
        }}
      />
      <div className="w-[1110px]">
        <Carousel draggable dots={false} slidesToShow={4} ref={carouselRef}>
          {props.list.map((val, index) => (
            <div key={index} className="outline-none border-none">
              <img className="w-[262.5px] h-[268px]" alt="#" src={val} />
            </div>
          ))}
        </Carousel>
      </div>
      <RightCircleOutlined
        className="text-white text-5xl"
        onClick={() => {
          carouselRef.current?.next();
        }}
      />
    </>
  );
}

export default CarouselShow;
