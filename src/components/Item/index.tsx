import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_PATH } from 'src/constants/images';
import './index.style.scss';
import { REACT_APP_IMAGE_URL } from 'src/configs';

interface ItemProps {
  title: string;
  image: string;
  option: string;
  id: string;
}

const optionToImagePath: Record<string, string> = {
  new: IMAGE_PATH.NEWS,
  blog: IMAGE_PATH.BLOGS,
  document: IMAGE_PATH.DOCUMENTS,
  video: IMAGE_PATH.VIDEOS,
  casestudy: IMAGE_PATH.CASESTUDY,
};
export default function Item({ title, image, option, id }: ItemProps) {
  const location = useLocation();
  const imageSrc = optionToImagePath[option] || IMAGE_PATH.IMAGE;
  return (
    <div
      className={`bg-white rounded-xl ${
        location.pathname === '/' ? null : 'shadow-xl'
      } `}
    >
      <img className="absolute" alt="#" src={imageSrc} />
      <img
        alt="#"
        className="w-full h-52 rounded-t-xl"
        crossOrigin="anonymous"
        onError={({ currentTarget }) => {
          currentTarget.src = IMAGE_PATH.THUMBNAIL_ERROR;
        }}
        src={image ? `${REACT_APP_IMAGE_URL}${image}` : IMAGE_PATH.IMAGE}
      />
      <div className="mx-8 pb-10  flex flex-col justify-between">
        <h1 className="text-2xl min-h-[96px] break-words title ">{title}</h1>
        {option === 'download' ? (
          <div className="flex  cursor-pointer w-fit">
            <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Download</p>
            <img alt="#" src={IMAGE_PATH.ARROW1} />
          </div>
        ) : (
          <Link
            to={`/resources/${option}/${id}`}
            className="no-underline w-fit"
          >
            <div className="flex items-end cursor-pointer w-fit mt-auto">
              <p className="text-[#4D4D4D] m-0 pr-2 font-medium"> Learn more</p>
              <img alt="#" src={IMAGE_PATH.ARROW} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
