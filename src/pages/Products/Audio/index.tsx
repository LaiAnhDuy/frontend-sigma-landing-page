import React from 'react';
import { IMAGE_PATH } from 'src/constants/images';
import { frames, items } from './config';
import Frame from 'src/components/Frame';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';

const Audio = () => {
  return (
    <div>
      <div className="container m-auto grid grid-cols-2 justify-between h-auto">
        <div>
          <h1 className="text-6xl">
            <span className="text-orange-400">Protect</span> Your Content,
            Maximize Your Revenues
          </h1>
          <p className="bg-orange-300 w-auto rounded-xl h-8 -mt-16"></p>
          <p className="text-2xl">
            Sigma Forensic Audio Wartermarking allow for audio from musicians,
            broadcasters and others to be tracked, measured and can be used to
            engage audiences.
          </p>
          <Link to={ROUTE.FREE_TRIAL}>
            <button className="bg-orange-400 text-white rounded border-none w-32 h-10 text-2xl cursor-pointer active:bg-main/60">
              Free trial
            </button>
          </Link>
        </div>
        <img src={IMAGE_PATH.TV_AUDIO} alt="" className="w-full" />
      </div>

      <div className="container m-auto bg-orange-400 rounded-2xl text-white">
        <h1 className="pt-5 text-center">What is Audio Wartermarking?</h1>
        <p className="pl-7 pr-7 pb-7 text-xl">
          Forensic Audio Watermarking incorporates audio watermarks in your
          music to protect your exclusive tracks. The unique watermark present
          in illegal streams is then used to pinpoint the source of piracy and
          take remedial actions.
        </p>
      </div>

      <div className="container m-auto text-center mt-16">
        <h1>
          Powerful <span className="text-orange-400">prevention</span> for audio
          leakage
        </h1>
        <p className="text-xl">
          Powerful prevention for audio leakage Synchronise apps, websites and
          devices with audio and video content, enabling extraordinary
          experiences that connect consumers with brands.
        </p>
        <div className="grid grid-cols-3 text-xl">
          {frames.map((frame, index) => (
            <Frame key={index} image={frame.image} title={frame.title} />
          ))}
        </div>
      </div>

      <div className="container m-auto text-center mt-20 border-dashed border">
        <h1 className="mt-10">
          Forensic <span className="text-orange-400">watermarking</span>{' '}
          workflow
        </h1>
        <img src={IMAGE_PATH.FRAME_7} alt="" className="w-4/5 mt-14 mb-12" />
      </div>

      <div className="bg-slate-50 pt-6 mt-24">
        <div className="container m-auto">
          <h1 className="text-center">
            <span className="text-orange-400">Protect & Maximize</span> Your
            Revenue with FAW
          </h1>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-10 my-10">
              <img
                style={{ order: item.id % 2 === 1 ? 1 : 2 }}
                src={item.image}
                alt=""
                className="w-full"
              />
              <div
                style={{ order: item.id % 2 === 1 ? 2 : 1 }}
                className="m-16"
              >
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center m-auto">
        <h1 className="text-2xl">
          Have a project in mind ? Contact us to discuss now.
        </h1>
        <button className="bg-orange-400 text-white text-xl border-none rounded-2xl w-52 h-10 cursor-pointer active:bg-main/60">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Audio;
