import React from 'react';
import Core from 'src/components/Core';
import { IMAGE_PATH } from 'src/constants/images';
import { codes, frames, items } from './config';
import Frame from 'src/components/Frame1';
import './index.style.scss';
import Item from 'src/components/Item';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';

const Streaming = () => {
  return (
    <div>
      <div className="container m-auto">
        <div className="container m-auto grid grid-cols-2 justify-between h-auto">
          <div>
            <h1 className="text-6xl">
              <span className="text-orange-400">Powering</span> the streaming
              experience
            </h1>
            <p className="bg-orange-300 w-auto h-8 rounded-xl -mt-16"></p>
            <p className="text-2xl">
              Unlock business value with reliable streaming from a trusted
              partner.
            </p>
            <button className="bg-orange-400 text-gray-50 border-none w-64 h-12 rounded text-2xl cursor-pointer active:bg-main/60">
              Get started for Free
            </button>
          </div>
          <div>
            <img src={IMAGE_PATH.TV} alt="" className="w-full" />
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="container m-auto ">
          <h1 className="text-center pt-10 mb-10">
            Sigma <span className="text-orange-400">Streaming</span> Platform
          </h1>
          <div className="text-center">
            <button className="p-3 mr-10 bg-white rounded-xl w-52 h-14 text-xl font-bold cursor-pointer active:text-orange-400">
              Core Component
            </button>
            <button className="p-3 bg-white rounded-xl w-52 h-14 text-xl font-bold cursor-pointer active:text-orange-400">
              Feature
            </button>
          </div>
          <div className="grid grid-cols-4 mx-52 mt-10 pb-10">
            {codes.map((code, index) => (
              <Core
                key={index}
                title={code.title}
                image={code.image}
                content={code.content}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container m-auto text-center">
        <h1 className="mb-16 mt-24">
          <span className="text-orange-400">Highlights</span> Features
        </h1>
        <div className="grid grid-cols-3">
          {frames.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              content={frame.content}
              image={frame.image}
            />
          ))}
        </div>
      </div>

      <div className="container m-auto">
        <h1 className="text-center my-16">
          Why customers love{' '}
          <span className="text-orange-400">Sigma Livestreaming</span> ?
        </h1>
        <div className="grid grid-cols-2">
          <img
            src={IMAGE_PATH.IMAGE_STREAMING1}
            alt=""
            className="mt-10 w-full"
          />
          <div>
            <div className="grid grid-cols-2 ml-14">
              <div className="mb-12 ml-10 mr-10 mt-5  border-b pb-3 text-xl">
                <p>
                  We're inspired by our customer's ideas and are fun to work
                  with
                </p>
              </div>
              <div className="mb-12 ml-10 mr-10 mt-5 border-b pb-3 text-xl">
                <p>Our video cloud platform is designed for unlimited scale</p>
              </div>
              <div className="mb-12 ml-10 mr-10 border-b pb-3 text-xl">
                <p>
                  We have the broadest video technology stack: Real-time, Live,
                  VOD
                </p>
              </div>
              <div className="mb-12 ml-10 mr-10 border-b pb-3 text-xl">
                <p>
                  Our accessible products drive engagement and interactivity for
                  all
                </p>
              </div>
              <div className="ml-10 mr-10 border-b pb-3 text-xl">
                <p>
                  We build everything on our video APIs, and many tech companies
                  use them too
                </p>
              </div>
              <div className="ml-10 mr-10 border-b pb-3 text-xl">
                <p>Our products are loved by customers and easy to use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 mt-24">
        <div className="container m-auto grid grid-cols-3 pt-24 gap-x-10 pb-24">
          {items.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              image={item.image}
              option={item.option}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="container m-auto text-center my-24">
        <h1 className="text-orange-400">Ready to Get Started ?</h1>
        <p className="font-bold text-xl mb-14">
          Start streaming today with our integrated video platform.
        </p>
        <div>
          <button className="bg-white text-orange-400 mr-10 rounded free_trial_border w-36 h-8 text-sm cursor-pointer  active:bg-main/90 active:text-white">
            Free Trial
          </button>
          <Link to={ROUTE.TALK_TO_EXPERT}>
            <button className="bg-white text-orange-400 rounded free_trial_border w-52 h-8 text-sm cursor-pointer active:bg-main/90 active:text-white">
              Talk to a Streaming Expert
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
