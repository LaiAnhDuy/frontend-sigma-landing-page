import React from 'react';
import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { cdns, items, frames } from './config';
import Item from 'src/components/Item';
import Frame from 'src/components/Frame';

const Multi = () => {
  return (
    <div>
      <div className="container m-auto grid grid-cols-2 justify-between h-auto">
        <div>
          <h1 className="text-6xl">
            <span className="text-orange-400">Optimizing</span> Content Delivery
            Network
          </h1>
          <p className="bg-orange-300 w-auto h-8 rounded-xl -mt-16"></p>
          <p className="text-2xl">
            Sigma multi-CDN helps you reduce latency, improve performance, and
            save costs when routing traffic in real time by choosing to use a
            CDN provider that offers a cost-to-performance ratio best for your
            business.
          </p>
          <button className="bg-orange-400 text-gray-50 border-none w-32 h-11 rounded text-2xl cursor-pointer active:bg-main/60">
            Get demo
          </button>
        </div>
        <div>
          <img src={IMAGE_PATH.TV1} alt="" className="w-full" />
        </div>
      </div>

      <div className="container m-auto text-white bg-orange-400 rounded-3xl">
        <h1 className="text-center pt-6">What is a Multi CDN?</h1>
        <p className="pr-7 pl-7 pb-7 text-xl">
          A Content Delivery Network (CDN) is a group of
          geographically-distributed servers which help you deliver your content
          faster to users. However, CDNs can perform differently at different
          times or in different locations. They can experience outages and
          slowdowns. With a multi-CDN strategy your content is hosted with more
          than one CDN provider, enabling you to drive better application
          performance and in many cases, lower costs.
        </p>
      </div>

      <div className="container m-auto mt-10">
        <h1 className="text-orange-400">CDN performance over 30 days</h1>
        <img src={IMAGE_PATH.CHART} alt="" className="w-full" />
        <div className="grid grid-cols-8 mt-6">
          {cdns.map((item, index) => (
            <img src={item} alt="" key={index} />
          ))}
        </div>
      </div>
      <div className="bg-orange-400 mt-12">
        <div className="container m-auto text-center py-5">
          <h1 className="text-white text-4xl">Outstanding advantages</h1>
          <p className="text-white m-10 text-xl">
            Sigma Multi CDN is the best choice for organizations implementing
            multi-CDN. Its combination of simplicity and ease of use with
            flexible and powerful DNS traffic management enable our customers to
            achieve significant performance gains and cost reductions.
          </p>
          <div className="grid grid-cols-3 text-white text-xl">
            {frames.map((frame, index) => (
              <Frame key={index} image={frame.image} title={frame.title} />
            ))}
          </div>
        </div>
      </div>

      <div className="container m-auto p-5">
        <div className="image-container ">
          <div className="text-overlay images h-[537px] text-white">
            <h1 className="text-6xl pt-10 text-center">Converter Technology</h1>
            <div className="grid grid-cols-2 text-4xl">
              <div className="pl-24 pr-24 pt-5">
                <h5>DNS multi-CDN solutions</h5>
                <h5>On-the-fly manifest rewrite with a proxy</h5>
              </div>

              <div className="pl-24 pr-24 pt-5">
                <h5>Client-side CDN switcher</h5>
                <h5>Server – side CDN switcher (selector)</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container m-auto py-10">
          <div className="grid grid-cols-3 gap-x-10">
            {items.map((item, index) => (
              <Item
                key={index}
                option={item.option}
                title={item.title}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container m-auto text-center">
        <h1 className="text-4xl">
          Multi-CDN Made Easy-Plan, Implement and Test
        </h1>
        <button className="bg-orange-400 text-white border-none rounded-xl w-64 h-10 text-base cursor-pointer active:bg-main/60">
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default Multi;
