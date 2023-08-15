import React, { ReactNode } from 'react';
import { IMAGE_PATH } from 'src/constants/images';
import './index.style.scss';
import { firstItem, frames, items, sigmaInteractiveSteps } from './config';
import Frame2 from 'src/components/Frame2';
import Frame from 'src/components/Frame1';
import ROUTE from 'src/constants/route';
import ButtonGeneral from 'src/components/Product/ButtonGeneral';

type InteractiveStepProps = {
  img: string;
  title: string;
  caption: ReactNode;
};
const InteractiveStep = ({ img, title, caption }: InteractiveStepProps) => {
  return (
    <div className="p-5 rounded-xl mr-10 bg-white interactive-step-container">
      <div className="h-36">
        <img src={img} alt={title} />
      </div>
      <div>
        <p className="text-orange-400 font-medium text-xl">{title}</p>
        <p className="my-5 mb-10 text-xl">{caption}</p>
      </div>
    </div>
  );
};

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
            {sigmaInteractiveSteps.map((step) => (
              <InteractiveStep key={step.title} {...step} />
            ))}
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
        <div className="flex justify-center mb-24">
          <ButtonGeneral
            link={ROUTE.FREE_TRIAL}
            name="Free Trial"
            css="bg-main text-white w-[241px] active:bg-main/90"
          />
          <ButtonGeneral
            link={ROUTE.TALK_TO_EXPERT}
            name="Talk to expert"
            css="bg-white text-main w-[307px] active:bg-[#fafafa] "
          />
        </div>
      </div>
    </div>
  );
};

export default SigmaInteractive;
