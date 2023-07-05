import Frame from 'src/components/Frame1';
import { IMAGE_PATH } from 'src/constants/images';
import {
  firstList,
  fourthList,
  frames,
  images,
  items,
  secondList,
  thirdList,
} from './config';
import './index.style.scss';
import Checkbox from 'src/components/Checkbox';

const SigmaDRM = () => {
  return (
    <div>
      <div className="container m-auto grid grid-cols-2 justify-between">
        <div>
          <h1 className="text-6xl">
            <span className="text-orange-400">Protecting </span> all content in
            Digital World
          </h1>
          <p className="bg-orange-300 w-auto h-8 rounded-xl -mt-16"></p>
          <p className="text-2xl">
            Media companies moving to the cloud require robust tools to securely
            store, move, and distribute their content. Digital rights management
            (DRM) solutions enable you to achieve secured content playback
            across a large range of consumer devices and platforms
          </p>
          <button className="bg-orange-400 text-gray-50 border-none w-96 h-11 rounded text-2xl cursor-pointer active:bg-main/60">
            Request your free DRM trial
          </button>
        </div>
        <div>
          <img src={IMAGE_PATH.TV_DRM} alt="" className="w-full" />
        </div>
      </div>

      <div className="container m-auto text-center">
        <h1 className="mb-16 mt-24">
          Sigma <span className="text-orange-400">DRM's</span> Advantages
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

      <div
        className="images_drm p-24 mt-16"
        style={{ backgroundImage: `url(${IMAGE_PATH.IMAGE_DRM})` }}
      >
        <div className="container m-auto text-center text-white">
          <h1>
            DRM - <span className="text-orange-400">Trend</span> of the digital
            world
          </h1>
          <p className="text-xl ">
            DRM has been developed by Microsoft, Google, Apple, Adobe,
            ThudoMultimedia,...
            <br /> DRM products were developed in response to the rapid increase
            in online piracy of
            <br /> materials marketed by widespread use of peer-to-peer file
            exchange programs
          </p>

          <div className="mt-24 gird grid-cols-4 justify-between">
            {items.map((item, index) => (
              <img src={item.image} alt="" key={index} className="w-1/4" />
            ))}
          </div>
        </div>
      </div>

      <div className="container m-auto">
        <h1 className="text-center">
          <span className="text-orange-400">Let's</span> get Technical
        </h1>
        <div className="grid grid-cols-2 gap-x-10 my-10">
          <div>
            <div className="border_table h-8 flex items-center pl-5 bg-orange-400 text-white">
              Lisence Delivery Network
            </div>
            {firstList.map((item, index) => (
              <div
                key={index}
                className={`border_list h-10 flex items-center pl-5 justify-between custom_div ${
                  item.id % 2 === 0 ? 'bg-slate-50' : ''
                }`}
              >
                {item.title}
                <Checkbox checked={item.state} />
              </div>
            ))}
          </div>
          <div>
            <div className="border_table h-8 flex items-center pl-5 bg-orange-400 text-white">
              Customer usage features
            </div>
            {secondList.map((item, index) => (
              <div
                key={index}
                className={`border_list h-10 flex items-center pl-5 justify-between custom_div ${
                  item.id % 2 === 0 ? 'bg-slate-50' : ''
                }`}
              >
                {item.title}
                <Checkbox checked={item.state} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            <div className="border_table h-8 flex items-center pl-5 bg-orange-400 text-white">
              Authentication method
            </div>
            {thirdList.map((item, index) => (
              <div
                key={index}
                className={`border_list h-10 flex items-center pl-5 justify-between custom_div ${
                  item.id % 2 === 0 ? 'bg-slate-50' : ''
                }`}
              >
                {item.title}
                <Checkbox checked={item.state} />
              </div>
            ))}
          </div>
          <div>
            <div className="border_table h-8 flex items-center pl-5 bg-orange-400 text-white">
              DRM Security
            </div>
            {fourthList.map((item, index) => (
              <div
                key={index}
                className={`border_list h-10 flex items-center pl-5 justify-between custom_div ${
                  item.id % 2 === 0 ? 'bg-slate-50' : ''
                }`}
              >
                {item.title}
                <Checkbox checked={item.state} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container m-auto text-center">
        {images.map((item, index) => (
          <div key={index} className='border-dashed border border-slate-400 rounded-[40px] my-24 py-10'>
            <h1>
              <span className="text-orange-400">{item.title} </span> {item.content}
            </h1>
            <img src={item.image} alt=''/>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 mt-24">
        <div className="container m-auto text-center py-16">
          <h1 className="mb-10">
            <span className="text-orange-400">Achieve</span> Compliance
          </h1>
          <p className="my-10 mx-56 text-xl">
            Sigma DRM system developed by Thu Do has high security and is
            certified by the Cartesian organization to obtain international
            standards.
          </p>
          <div className="flex gap-x-5 justify-center">
            <img src={IMAGE_PATH.IMAGE_DRM1} alt="" className="w-full" />
            <img src={IMAGE_PATH.IMAGE_DRM2} alt="" className="w-full" />
          </div>
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
          <button className="bg-white text-orange-400 rounded free_trial_border w-52 h-8 text-sm cursor-pointer active:bg-main/90 active:text-white">
            Talk to a Streaming Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigmaDRM;
