import React from 'react';
import { IMAGE_PATH } from 'src/constants/images';
import './index.style.scss';
import { firstItem, frames, items } from './config';
import Frame2 from 'src/components/Frame2';
import Frame from 'src/components/Frame1';

const SigmaInteractive = () => {
  return (
    <div>
      <div className="container m-auto grid grid-cols-2 justify-between h-auto">
        <div>
          <h1 className="text-6xl">
            <span className="text-orange-400">Dynamize</span> Your Business with
            Sigma Interactive
          </h1>
          <p className="bg-orange-300 w-auto h-8 rounded-xl -mt-16"></p>
          <p className="text-2xl">
            Open up new vistas for modern business due to the effective use of
            advanced communications.
          </p>
          <button className="bg-orange-400 text-gray-50 border-none w-64 h-11 rounded text-2xl cursor-pointer active:bg-main/60">
            Get started for Free
          </button>
        </div>
        <div>
          <img src={IMAGE_PATH.TV_INTERACTIVE} alt="" className="w-full" />
        </div>
      </div>

      <div className="bg-slate-50 mt-24">
        <div className="container m-auto ">
          <h1 className="text-center pt-10 mb-10">
            Innovative <span className="text-orange-400">Business</span> Models
            With Interactive
          </h1>

          <div className="grid grid-cols-3 py-10">
            <div className="p-5 rounded-xl mr-10 bg-white">
              <div className="h-36">
                <img src={IMAGE_PATH.ITEM_INTERACTIVE1} alt="" />
              </div>
              <div>
                <p className="text-orange-400 font-medium text-xl">Goal</p>
                <p className="my-5 mb-10 text-xl">
                  Do you want to employ an interactive application that embodies
                  an interesting concept in a modern communicative format? Our
                  developers can create an exclusive multi-function product
                  leading to client appreciation and brand loyalty.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-xl mr-10 bg-white">
              <div className="h-36">
                <img src={IMAGE_PATH.ITEM_INTERACTIVE2} alt="" />
              </div>
              <div>
                <p className="text-orange-400 font-medium text-xl">Process</p>
                <p className="my-5 text-xl">
                  Our qualified specialists draw on extensive experience in
                  creating interactive applications; your ideas will be
                  transformed into efficient communication algorithms. This
                  efficient technology will ensure the high quality of products
                  and their popularity among end users.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white">
              <div className="h-36">
                <img src={IMAGE_PATH.ITEM_INTERACTIVE3} alt="" />
              </div>
              <div>
                <p className="text-orange-400 font-medium text-xl">Result</p>
                <p className="my-5 text-xl">
                  An ideal IPTV solution for operators who want to start or
                  upgrade their platform, and reach audiences worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto">
        <h1 className="text-center pt-10 mb-10">
          Say Hello To The <span className="text-orange-400">Next-Gen OTT</span>{' '}
          Solution
        </h1>
        <div
          className="bg_image p-10 px-24 rounded-xl"
          style={{ backgroundImage: `url(${IMAGE_PATH.IMAGE_INTERACTIVE1})` }}
        >
          {items.map((item) => (
            <div key={item.order}>
              <h1 className="text-white">
                <span className="text-orange-400 text-5xl mr-5 font-medium">
                  {item.order}
                </span>{' '}
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="container m-auto mt-24 border rounded-xl text-center">
        <h1 className="pt-10 mb-10">
          Customized <span className="text-orange-400">Scenarios</span> For Each
          Use Case
        </h1>
        <p className="text-xl px-10 pb-14">
          Innovative business models allow for the active involvement of clients
          in bilateral communication. Make your clients active participants
          rather than passive spectators so that they enjoy the process of
          working with your business. Company loyalty will increase tenfold.
        </p>
      </div>

      <div className="bg-slate-50 pt-24 pb-10">
        <div className="container m-auto grid grid-cols-3 gap-x-10">
          {frames.map((frame, index) => (
            <Frame2
              key={index}
              image={frame.image}
              title={frame.title}
              content={frame.content}
            />
          ))}
        </div>
      </div>

      <div className="container m-auto text-center">
        <h1 className="mb-16 mt-24">
          Run <span className="text-orange-400">Interactive</span> Live Streams
        </h1>
        <div className="grid grid-cols-3">
          {firstItem.map((item, index) => (
            <Frame
              key={index}
              title={item.title}
              content={item.content}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="container m-auto text-center my-24">
        <h1 className="text-orange-400">More than an OTT</h1>
        <p className="font-bold text-xl mb-14">
          Let's make something great together
        </p>
        <div>
          <button className="bg-white text-orange-400 mr-10 rounded free_trial_border w-36 h-8 text-sm cursor-pointer  active:bg-main/90 active:text-white">
            Free Trial
          </button>
          <button className="bg-white text-orange-400 rounded free_trial_border w-52 h-8 text-sm cursor-pointer active:bg-main/90 active:text-white">
            Talk to a Streaming Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigmaInteractive;
