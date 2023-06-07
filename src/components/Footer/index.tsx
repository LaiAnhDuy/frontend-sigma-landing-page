import React from 'react';
import './index.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { IMAGE_PATH } from 'src/constants/images';
import { listItem } from './config';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='mt-auto'>
      <hr />
      <div className=" lg:container m-auto ">
        <div className="grid footer-content">
          {listItem.map((val, index) => (
            <div key={index}>
              <h2>{val.title}</h2>
              {val.title === 'Product' ? (
                <div className="grid product">
                  <div>
                    {val.content.slice(0, 5).map((item, count) => (
                      <Link key={count} to={item.url}>
                        <p>{item.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                  <div>
                    {val.content.slice(5, 9).map((item, count) => (
                      <Link key={count} to={item.url}>
                        <p>{item.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                val.content.map((item, count) => (
                  <Link key={count} to={item.url}>
                    <p>{item.subtitle}</p>
                  </Link>
                ))
              )}
            </div>
          ))}

          <div>
            <h2>Subscribe to our newsletter</h2>
            <input
              placeholder="Enter your email*"
              id="input"
              className="px-3 h-12 rounded-xl border-solid border-black"
            ></input>
            <button className="h-12 w-24 mt-3 rounded-xl bg-[#fd841f] border-none text-[#ffffff]">
              <p className="button1 text-base">Subscribe</p>
            </button>
            <h2 className="mt-8">For Enquiries</h2>
            <div className="flex">
              <FontAwesomeIcon
                className="mr-6 cursor-pointer"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="mr-6 cursor-pointer"
                icon={faLinkedinIn}
              />
              <FontAwesomeIcon className="cursor-pointer" icon={faYoutube} />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="flex">
              <img src={IMAGE_PATH.LOGO_FOOTER} alt="#"></img>
              <p>Thu Do Multimedia Communications Joint Stock Company</p>
            </div>
            <p className="font-light mb-2">10th floor, No 48 Le Van Luong</p>
            <p className="font-light mt-1">
              N1 New Urban, Nhan Chinh Ward, Thanh Xuan District, Hanoi, Vietnam
            </p>
          </div>
          <div>
            <p className="font-light mb-2 mt-10">Tel: (+84) 4 3668 7038</p>
            <p className="font-light mt-1 mb-2">Email: thudojsc@gviet.vn</p>
            <p className="font-light mt-1">
              2022 by Thu Do Multimedia. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
