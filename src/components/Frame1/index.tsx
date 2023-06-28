import React from 'react'

interface FrameProps {
    title: string;
    content: string;
    image: string;
  }
const Frame = (props: FrameProps) => {
  return (
    <div>
        <div className='m-14'>
            <img src={props.image} alt=''/>
            <h1 className='font-medium'>{props.title}</h1>
            <p className='text-xl'>{props.content}</p>
        </div>
    </div>
  )
}

export default Frame