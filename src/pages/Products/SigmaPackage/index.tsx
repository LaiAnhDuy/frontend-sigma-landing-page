import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { Carousel } from 'antd';
import {
  LIST_CAROUSEL,
  LIST_SPECIFICATION,
  SIGMA_PACKAGE1,
  SIGMA_PACKAGE2,
} from './configs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';

function SigmaPackage() {
  const numbers = [1, 2, 3, 4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrentSlide(clickedIndex || 0);
  }, [clickedIndex]);

  const handleButtonClick = (index: number) => {
    setCurrentSlide(index);
    setClickedIndex(index);
  };
  return (
    <div className="container m-auto text-black">
      <div className="flex flex-col">
        <div className="flex justify-between h-[540px]">
          <div className="pt-9">
            <div className="relative z-[1] text-[55px] font-bold h-[100px] leading-[55px] pb-6 pr-[168px] break-words">
              Sigma <span className="text-main">Packager</span> & Origin
            </div>
            <div className="top-[-36px] relative bg-main/50 w-[224px] h-[30px] rounded-[20px]" />
            <div className="w-[488px] h-[90px] font-medium text-[21px] leading-[30px] pb-8">
              Package, Secure and Deliver Any Content to Any OTT Device. Prepare
              content for streaming & Pack the output source into a
              user-friendly format
            </div>
            <Link to={ROUTE.FREE_TRIAL}>
              <button className="bg-main rounded-[4px] border-none text-white w-[177px] h-[46px] font-medium text-[16px] leading-4 cursor-pointer active:bg-main/90">
                Start your free trial
              </button>
            </Link>
          </div>
          <div className="">
            <img
              className="w-[900px]"
              src={IMAGE_PATH.TV_PACKAGE}
              alt="TV_PACKAGE"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col bg-[#F9F9F9] mt-[80px] pb-1 h-[1100px]">
        <div className="mx-[184px]">
          <div className="font-bold text-[30px] leading-[30px] text-center pb-[22px] pt-[50px]">
            How it <span className="text-main">works</span> ?
          </div>
          <div className="flex justify-center h-[84px] text-center text-[#000] text-[21px] leading-[28px]">
            <div className="w-[1000px]">
              Prepare your media for Adaptive Bitrate (ABR) playback in HLS,
              MPEG-DASH, and Smooth LiveStreaming for delivery to any
              internet-connected device. Secure your streams with DRM. Ready
              media for streaming from a standard web server and any Content
              Delivery Network (CDN).
            </div>
          </div>
          <div className="my-[70px] flex justify-center">
            {numbers.map((number, index) => (
              <div key={index} className="flex">
                <div className="flex justify-center items-center">
                  <div
                    style={
                      (clickedIndex !== null && index <= clickedIndex) ||
                      index === 0
                        ? { background: '#FD841F' }
                        : {}
                    }
                    className="w-[180px] h-[3px] bg-[#A5A5A5]"
                  />
                </div>
                <button
                  onClick={() => {
                    handleButtonClick(index);
                  }}
                  style={
                    currentSlide === index
                      ? {
                          background: '#FD841F',
                          color: 'white',
                          border: '1px solid #FD841F',
                        }
                      : {}
                  }
                  className="w-[60px] h-[60px] rounded-full outline-none border-[3px] border-solid border-[#A5A5A5] bg-[#F9F9F9] cursor-pointer text-[24px] text-[#A5A5A5]"
                >
                  {number}
                </button>
              </div>
            ))}
            <div className="flex justify-center items-center">
              <div className="w-[180px] h-[3px] bg-[#A5A5A5]" />
            </div>
          </div>
          <Carousel
            key={currentSlide}
            afterChange={(slideIndex: number) => setCurrentSlide(slideIndex)}
            initialSlide={currentSlide}
            dotPosition="bottom"
            draggable={true}
            className="custom-dots"
          >
            {LIST_CAROUSEL.map((e, index) => (
              <div key={index}>
                <div className="flex justify-center">
                  <img src={IMAGE_PATH.PACKAGE_W} alt="" />
                  <div className="w-[700px] ml-[90px]">
                    <div className="font-medium text-[21px] pt-[100px]">
                      {e.title}
                    </div>
                    <div className="pt-[30px] text-[21px] leading-10">
                      {e.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col pb-[100px]">
        <div className="">
          <div className="font-bold text-[30px] leading-[30px] text-center pb-[58px] pt-[100px]">
            Sigma <span className="text-main">Packager</span> Key Feature
          </div>
          <div className="flex flex-col h-[820px]">
            <div className="grid grid-rows-3 grid-cols-3">
              {SIGMA_PACKAGE1.map((e, index) => (
                <div key={index} className="trans py-12 px-24 cursor-pointer">
                  <div className="flex flex-col">
                    <div className="flex pb-5">
                      <img className="w-[80px] h-[80px]" src={e.img} alt="" />
                    </div>
                    <div className="font-medium text-[21px] text-main leading-[21px] pb-[10px]">
                      {e.title}
                    </div>
                    <div className="text-[16px] leading-5">{e.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] h-[1150px]">
        <div className="relative overflow-hidden">
          <div className="circle1"></div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="relative top-[-950px]">
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center">
              <span className="text-main">Technical</span> specifications
            </div>
            <div className="flex justify-center h-[30px] text-center text-[21px] leading-[30px]">
              <div className="w-[886px]">
                Sigma Transcoder Live service & VOD service
              </div>
            </div>
            <div className="grid grid-cols-3 w-full h-[300px] mt-[50px]">
              <div className="text-white text-[50px] leading-[50px] font-bold w-[282px] h-[100px] mr-24">
                <div className="ml-9">Input parameters</div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">01.</span> Video Formats
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    MP4, 3GP, OGG, WMV, FLV, WEBM, TS, MP3, …
                  </div>
                </div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">02.</span> Bitrate
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    300kbps to 50Mbps (HD), 80 Mpbs (UHD)
                  </div>
                </div>
              </div>
            </div>
            {/* line */}
            <div className="flex absolute right-[242px] top-[340px]">
              <div className="w-72 bg-white mr-[300px]" />
              <div className="w-[1026px] h-[3px] bg-main" />
            </div>
            <div className="grid grid-cols-3 w-full h-[393px] mt-[60px]">
              <div className="text-white text-[50px] leading-[50px] font-bold w-[282px] h-[100px] mr-24">
                <div className="ml-9">Processing</div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">01.</span> ABR Formatting
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    LIVE, VOD, TVoD, TSTV
                  </div>
                </div>
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px] pt-[184px]">
                    <span className="text-main">03.</span>Content Protection
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    Microsoft PlayReady DRM support forr HLS, Smooth Streaming
                    and DASH Apple Segment and FairPlay support for HLS
                    Winevine, Playready support for DASH using CENC Key
                    provisioning interface to leading CASS & DRM vendors.
                  </div>
                </div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">02.</span> Protocol
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    <div className="mb-6">
                      <span className="text-main font-bold">
                        Closed Caption:
                      </span>{' '}
                      WebVTT for HLS, WebVTT or SMPTE-TT for DASH DVB
                    </div>
                    <div className="mb-6">
                      <span className="text-main font-bold">Teletext:</span>{' '}
                      WebVTT for HLS, WebVTT or SMPTE-TT for DASH DVB
                    </div>
                    <div className="mb-6">
                      <span className="text-main font-bold">Subtitles:</span>{' '}
                      SMPTE-TT for DASH
                    </div>
                  </div>
                </div>
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">04.</span> Key systems support
                    JITE on the fly rate
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    Apple HLS Low Latency DASH LL-CMAF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <div>
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[105px] pb-[20px]">
              Sigma <span className="text-main">Origin</span> Key Feature
            </div>
          </div>
          <div className="flex flex-col h-[820px]">
            <div className="grid grid-rows-3 grid-cols-3 mt-[60px]">
              {SIGMA_PACKAGE2.map((e, index) => (
                <div
                  key={index}
                  className="trans py-12 px-24 cursor-pointer border border-solid border-[#4D4D4D] rounded-[10px] m-[15px]"
                >
                  <div className="flex flex-col">
                    <div className="flex pb-5">
                      <img className="w-[80px] h-[80px]" src={e.img} alt="" />
                    </div>
                    <div className="text-[16px] text-main leading-5">
                      {e.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img src={IMAGE_PATH.P_MAC} alt="" />
            <div className="w-[600px] ml-[200px]">
              <div className="text-center font-bold text-[30px] mb-[40px]">
                Sigma Origin Technical{' '}
                <span className="text-main">specification</span>
              </div>
              <div>
                {LIST_SPECIFICATION.map((e, index) => (
                  <div key={index} className="flex justify-between mb-[30px]">
                    <div className="text-main font-medium">{e.title}</div>
                    <div className="w-[360px] text-right">{e.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[100px]">
            <div className="font-bold text-left text-[30px] mb-[50px]">
              Sigma <span className="text-main">Package</span> Solution
            </div>
            <img src={IMAGE_PATH.P_SOLUTION} alt="" />
          </div>
          <div className="font-medium text-[30px] leading-[30px] text-center py-[53px]">
            Let share your <span className="text-main">project</span> with Us
          </div>
          <div className="flex justify-center mb-24">
            <Link to={ROUTE.FREE_TRIAL}>
              <button className="bg-main rounded border-main border-[1px] border-solid text-white text-[21px] w-[241px] h-[50px] cursor-pointer mr-[50px] active:bg-main/90">
                Free Trial
              </button>
            </Link>
            <button className="bg-white rounded border-main border-[1px] border-solid text-main text-[21px] w-[307px] h-[50px] cursor-pointer active:bg-[#fafafa]">
              Talk to a Streaming Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigmaPackage;
