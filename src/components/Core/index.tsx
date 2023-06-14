import React from 'react';
import { IMAGE_PATH } from 'src/constants/images';

interface CoreProps {
  image: string;
  title: string;
  content: string;
}
const Core = (props: CoreProps) => {
  return (
    <div className='p-5 rounded-xl m-5 hover:bg-gray-800 hover:text-white bg-white'>
      <div className='h-36'>
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="text-orange-400 font-medium text-xl">{props.title}</p>
        <p className='my-5 text-xl'>{props.content}</p>
      </div>
      <div className="flex  cursor-pointer w-fit">
        <p className='m-0 pr-2 font-medium'> View more</p>
        <img alt="#" src={IMAGE_PATH.ARROW} />
      </div>
    </div>
  );
};

export default Core;
