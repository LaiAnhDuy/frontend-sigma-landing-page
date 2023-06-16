/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import Item from 'src/components/Item';
import { Pagination, PaginationProps } from 'antd';
import { blogs, casestudy, documents, news, videos } from './item';
import ScrollToTopButton from 'src/components/ScrollToTop';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Resources() {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const pathname = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1,
  );
  useEffect(() => {
    setTitle(pathname);
  });
  const navigate = useNavigate();
  const [title, setTitle] = useState('new');
  const listTitle = [
    {
      title: 'News',
      value: 'new',
    },
    {
      title: 'Blogs',
      value: 'blog',
    },
    {
      title: 'Casestudy',
      value: 'casestudy',
    },
    {
      title: 'Documents',
      value: 'document',
    },
    {
      title: 'Video',
      value: 'video',
    },
  ];
  const dataLength = () => {
    switch (title) {
      case 'new':
        return news;
      case 'blog':
        return blogs;
      case 'document':
        return documents;
      case 'video':
        return videos;
      case 'casestudy':
        return casestudy;
    }
  };

  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return currentPage === 1 ? null : (
        <a className="text-black hover:text-black ">Prev</a>
      );
    }
    if (type === 'next') {
      return currentPage ===
        Math.ceil((dataLength()?.length ?? 0) / 6) ? null : (
        <a className="text-black hover:text-black">Next</a>
      );
    }
    return originalElement;
  };

  return (
    <div className="container m-auto ">
      <div className="grid grid-cols-[auto_660px]">
        <div>
          <h1 className="text-[55px] ">
            More <span className="text-main ">resources</span> of Sigma Solution
          </h1>
          <p className="bg-main/50 rounded-[20px] h-8 -mt-16 mb-9 "></p>
          <img src={IMAGE_PATH.VECTOR} alt="#" />
        </div>
        <img src={IMAGE_PATH.TV} alt="#" />
      </div>
      <div className="text-center  ">
        <div className="flex justify-center">
          {listTitle.map((val, index) => (
            <div
              key={index}
              className={` cursor-pointer ${
                title === `${val.value}` ? ' selected' : ' active'
              } `}
              onClick={() => {
                setTitle(`${val.value}`);
                navigate(`/resources/${val.value}`);
              }}
            >
              <h1 className="px-4 text-xl  ">{val.title}</h1>
              <hr className="border-4 m-0 " />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h1 className="text-3xl mt-12">
            Deep dive <span className="text-main">into</span> our offerings and{' '}
            <span className="text-main">news from us</span>
          </h1>
          <div className="grid grid-cols-3 gap-x-10 gap-y-14 text-left">
            {dataLength()
              ?.slice((currentPage - 1) * 6, currentPage * 6)
              .map((val, index) => (
                <Item
                  key={index}
                  image={val.image}
                  title={val.title}
                  option={val.option}
                  id={val.id}
                />
              ))}
          </div>
          <Pagination
            className="my-16"
            itemRender={itemRender}
            total={dataLength()?.length}
            current={currentPage}
            onChange={(page) => {
              setCurrentPage(page);
            }}
            pageSize={6}
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
