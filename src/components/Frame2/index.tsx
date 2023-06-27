import React from 'react';

interface FrameProps {
  title: string;
  content: string;
  image: string;
}
const Frame2 = (props: FrameProps) => {
  return (
    <div className='mt-5 bg-white'>
      <div className="rounded-xl ">
        <img src={props.image} alt="" className="w-full" />
        <div className='p-5'>
          <h1 className="font-medium">{props.title}</h1>
          <p className="text-xl">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
