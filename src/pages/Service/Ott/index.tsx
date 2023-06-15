import './index.style.scss';
import { SIGMA_OTT_PLATFORM } from './configs';
import { IMAGE_PATH } from 'src/constants/images';
import Carousel from './CarouselOtt';

function Ott() {
  return (
    <div className="text-black">
      <div className="flex flex-col">
        <div className="flex justify-between h-[540px] mx-[184px]">
          <div className="pt-9">
            <div className="relative z-[1] text-[55px] font-bold leading-[50px] pb-2 break-words pt-[38px] h-[50px]">
              <span className="text-main">Sigma</span> OTT
            </div>
            <div className="top-[-24px] relative bg-main/50 w-[290px] h-[30px] rounded-[20px]" />
            <div className="w-[501px] h-[90px] font-medium text-[21px] leading-[30px] pb-8">
              Build your OTT product the way you want it. Supports all the
              features you need.
            </div>
            <button className="bg-main rounded-[4px] border-none text-white w-[177px] h-[46px] font-medium text-[16px] leading-4 cursor-pointer active:bg-main/90">
              Start your free trial
            </button>
          </div>
          <div className="">
            <img className="w-[900px]" src={IMAGE_PATH.TV_OTT} alt="TV_OTT" />
          </div>
        </div>

        <div className="flex justify-center flex-col mx-[184px]">
          <div className="flex flex-col h-[804px]">
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[50px] pb-[42px]">
              Sigma <span className="text-main">OTT</span> Platform
            </div>

            <div className="grid grid-cols-4 justify-items-center">
              {SIGMA_OTT_PLATFORM.map((e, index) => (
                <div
                  key={index}
                  className="trans w-[280px] h-[410px] rounded-[10px] cursor-pointer border-solid border-[2px] border-[#4D4D4D] hover:bg-[#4D4D4D] hover:text-white"
                >
                  <div className="flex flex-col">
                    <div className="h-[100px]">
                      <img className="p-[20px]" src={e.img} alt="" />
                    </div>
                    <div className="p-[20px] mt-[58px]">
                      <div className="text-main font-bold text-[16px] leading-4  h-4 pb-3">
                        {e.title}
                      </div>
                      <div className="pt-[10px] text-[16px] h-[120px]">
                        {e.description}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-[10px]">View more</div>
                        <img src={IMAGE_PATH.ARROW} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#F9F9F9]">
        <div className="mx-[184px]">
          <div className="flex flex-col h-[544px]">
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[50px] pb-[20px]">
              Our IPTV / OTT <span className="text-main">Platform</span>{' '}
              Provides
            </div>
            <div className="flex justify-between items-center mx-10">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mx-[184px]">
          <div>
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[105px] pb-[20px]">
              Our <span className="text-main">Client</span> Benefits
            </div>
            <div className="flex justify-center h-[90px] text-center text-[#000] text-[21px] leading-[30px] pb-[50px]">
              <div className="w-[886px]">
                Developed to be managed under one roof, our OTT platform
                provides all you need to manage channels, customers, and
                billing. We are focus in R&D, constantly updating our apps to
                provide you the best UX/UI for your customers.
              </div>
            </div>
            <img
              className="w-full mb-[130px]"
              src={IMAGE_PATH.OTT_CLIENT}
              alt=""
            />
          </div>
          <div className="font-medium text-[30px] leading-[30px] text-center pb-[53px]">
            Let share your <span className="text-main">project</span> with Us
          </div>
          <div className="flex justify-center mb-24">
            <button className="bg-main rounded border-main border-[1px] border-solid text-white text-[21px] w-[241px] h-[50px] cursor-pointer mr-[50px] active:bg-main/90">
              Free Trial
            </button>
            <button className="bg-white rounded border-main border-[1px] border-solid text-main text-[21px] w-[307px] h-[50px] cursor-pointer active:bg-[#fafafa]">
              Talk to a Streaming Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ott;
