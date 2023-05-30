import React from 'react';
import './index.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <hr />
      <div className=" max-w-5xl m-auto">
        <div className="grid footerContent">
          <div>
            <h2>Develope</h2>
            <p>Blog</p>
            <p>Case Study</p>
            <p>Document</p>
            <p>Video</p>
            <p>News</p>
          </div>
          <div>
            <h2>Company</h2>
            <p>About us</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h2>Product</h2>
            <div className="grid product">
              <div>
                <p>Multi DRM</p>
                <p>Livestreaming</p>
                <p>OTT</p>
                <p>Packager/ Transcoder</p>
                <p>Audio warter marking</p>
              </div>
              <div>
                <p>Multi CDN</p>
                <p>NS53</p>
                <p>Dynamic Ads Insert</p>
                <p>Interactive</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Subscribe to our newsletter</h2>
            <input
              placeholder="Enter your email*"
              id="input"
              className="px-3 h-12 rounded-xl border-solid border-black"
            ></input>
            <button className="h-12 w-24 mt-3 rounded-xl bg-[#fd841f] border-none text-[#ffffff]">
              <p className="button1 text-base">Subcribe</p>
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
              <img src="./images/logo-footer.svg" alt="#"></img>
              <p>Thu Do Multimedia Communications Joint Stock Company</p>
            </div>
            <p className="font-light mb-2">10th floor, No 48 Le Van Luong</p>
            <p className="font-light mt-1">
              N1 New Urban, Nhan Chinh Ward, Thanh Xuan District, Hanoi, Vietnam
            </p>
          </div>
          <div>
            <p className='font-light mb-2 mt-10'>Tel: (+84) 4 3668 7038</p>
            <p className='font-light mt-1 mb-2'>Email: thudojsc@gviet.vn</p>
            <p className='font-light mt-1'>2022 by Thu Do Multimedia. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
