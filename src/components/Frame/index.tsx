import React from 'react'

interface FrameProps {
    title: string;
    image: string;
  }
export default function Frame(props: FrameProps) {
    return (
        <div>
            <img src={props.image} alt=''/>
            <p>{props.title}</p>
        </div>
    )
}