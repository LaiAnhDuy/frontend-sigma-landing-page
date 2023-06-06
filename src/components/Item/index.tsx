import React from 'react';
import { IMAGE_PATH } from 'src/constants/images';

interface ItemProps {
  title: string;
  image: string
}
export default function Item(props: ItemProps) {
  return (
    <div className={`bg-white rounded-xl ${window.location.pathname ==="/"? null : "shadow-xl"} `}>
      <img className="absolute" alt="#" src={IMAGE_PATH.NEWS} />
      <img alt="#" className="w-full" src={props.image} />
      <div className="mx-8 pb-10  flex flex-col justify-between">
        <h1 className="text-2xl h-36">
         {props.title}
        </h1>
        <div className="flex  cursor-pointer w-fit">
          <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Learn more</p>
          <img alt="#" src={IMAGE_PATH.ARROW} />
        </div>
      </div>
    </div>
  );
}
