import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_PATH } from 'src/constants/images';

interface ItemProps {
  title: string;
  image: string;
  option: string;
  id: string;
}
export default function Item(props: ItemProps) {
  const location = useLocation()
  return (
    <div
      className={`bg-white rounded-xl ${
        location.pathname === '/' ? null : 'shadow-xl'
      } `}
    >
      <img
        className="absolute"
        alt="#"
        src={(() => {
          switch (props.option) {
            case 'new':
              return IMAGE_PATH.NEWS;
            case 'blog':
              return IMAGE_PATH.BLOGS;
            case 'document':
              return IMAGE_PATH.DOCUMENTS;
            case 'video':
              return IMAGE_PATH.VIDEOS;
            case 'casestudy':
              return IMAGE_PATH.CASESTUDY;
            case 'download':
                return IMAGE_PATH.DATA_SHEET;
          }
        })()}
      />
      <img alt="#" className="w-full" src={props.image} />
      <div className="mx-8 pb-10  flex flex-col justify-between">
        <h1 className="text-2xl h-36">{props.title}</h1>
        {
            props.option === 'download' ? (
                <div className="flex  cursor-pointer w-fit">
                    <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Download</p>
                    <img alt="#" src={IMAGE_PATH.ARROW1} />
                </div>
            ) : (
                <Link
                    to={`/resources/${props.option}/${props.id}`}
                    className="no-underline w-fit"
                >
                    <div className="flex  cursor-pointer w-fit">
                        <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Learn more</p>
                        <img alt="#" src={IMAGE_PATH.ARROW} />
                    </div>
                </Link>
        )}
      </div>
    </div>
  );
}
