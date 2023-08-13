import './index.style.scss';
import { IMAGE_PATH } from 'src/constants/images';
import { SIGMA_TRANSCODER1, SIGMA_TRANSCODER2, LIST_CHOOSE } from './config';
import { Link } from 'react-router-dom';
import ROUTE from 'src/constants/route';
import ButtonGeneral from 'src/components/Product/ButtonGeneral';

function SigmaTranscoder() {
  return (
    <div className="text-black">
      <div className="flex flex-col">
        <div className="flex justify-between h-[540px] mx-[184px]">
          <div className="pt-9">
            <div className="relative z-[1] text-[55px] font-bold h-[100px] leading-[55px] pb-6 pr-14 break-words">
              Sigma <span className="text-main">Transcoder</span> Safe and
              reliable
            </div>
            <div className="top-[-36px] relative bg-main/50 w-[430px] h-[30px] rounded-[20px]" />
            <div className="w-[488px] h-[90px] font-medium text-[21px] leading-[30px] pb-8">
              Enable you to easily create, ingest, transcode, caption, inspect,
              deliver and play any type of video.
            </div>
            <button className="bg-main rounded-[4px] border-none text-white w-[177px] h-[46px] font-medium text-[16px] leading-4 cursor-pointer active:bg-main/90">
              Start your free trial
            </button>
          </div>
          <div className="">
            <img
              className="w-[900px]"
              src={IMAGE_PATH.TV_TRANSCODER}
              alt="TV_N53"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col bg-[#F9F9F9] mt-[80px] pb-1">
        <div className="mx-[184px]">
          <div className="font-bold text-[30px] leading-[30px] text-center pb-[22px] pt-[50px]">
            How it <span className="text-main">works</span> ?
          </div>
          <div className="flex justify-center h-[84px] text-center text-[#000] text-[21px] leading-[28px]">
            <div className="w-[1000px]">
              Package and secure a single VOD presentation just-in-time (JIT)
              into formats that reach any internet-connected device. Prepare
              your media for Adaptive Bitrate (ABR) playback in HLS, MPEG-DASH
              for delivery to any internet-connected device.
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-3">
            {SIGMA_TRANSCODER1.map((e, index) => (
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
      <div className="flex flex-col pb-[70px]">
        <div className="mx-[184px]">
          <div className="flex flex-col h-[804px]">
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[100px] pb-[20px]">
              <span className="text-main">Why</span> choose Sigma Transcoder ?
            </div>
            <div className="grid grid-cols-2 mt-32">
              <img alt="#" src={IMAGE_PATH.TRANS_W} />
              <div className="grid grid-rows-[70px, 70px, 70px, 70px, 70px]  text-left w-[500px] ">
                {LIST_CHOOSE.map((val, index) => (
                  <div key={index} className="flex items-center">
                    <hr className="hr" />
                    <p className="text-xl leading-5 m-0 font-medium">
                      {val.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] h-[1010px]">
        <div className="relative overflow-hidden">
          <div className="circle"></div>
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
            <div className="grid grid-cols-3 w-full h-[393px] mt-[50px]">
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
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">03.</span> 03. Codecs
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    <div>
                      <span className="text-main font-bold">Video:</span> H.264
                      (Baseline, Main, High), H.265, AV1, MPEG4, Theora, VP9,
                      VP8, WMV, Vorbis, WMA, …
                    </div>
                    <div>
                      <span className="text-main font-bold">Audio:</span> AAC
                      (AAC-LC, HE-AAC, H-AAC v2), MP3
                    </div>
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
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">04.</span> Resolution & frame
                    rate
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    Up to 2160 @50/59.94/60 fps
                  </div>
                </div>
              </div>
            </div>

            {/* line */}
            <div className="absolute right-[242px] top-[493px] w-[1026px] h-[3px] bg-main" />

            <div className="grid grid-cols-3 w-full h-[393px] mt-[20px]">
              <div className="text-main text-[50px] leading-[50px] font-bold w-[282px] h-[100px] mr-24">
                <div className="ml-9">Technical specifications</div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">01.</span> Support
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    LIVE, VOD, TVoD, TSTV
                  </div>
                </div>
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">03.</span> Streaming formats
                    support JITP on the fly
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    <div>
                      <span className="text-main">+</span> Apple HTTP Live
                      Streaming (HLS){' '}
                    </div>
                    <div>
                      <span className="text-main">+</span> Microsoft Smooth
                      Streaming (MSS)
                    </div>
                    <div>
                      <span className="text-main">+</span> Adobe HTTP Dynamic
                      Streaming (HDS){' '}
                    </div>
                    <div>
                      <span className="text-main">+</span> MPEG DASH
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[450px]">
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">02.</span> Protocol
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    MPEG-2 TS (MPTS & SPTS) transport over UDP
                  </div>
                </div>
                <div className="pb-20">
                  <div className="font-bold text-[30px] leading-[30px]">
                    <span className="text-main">04.</span> Key systems support
                    JITE on the fly rate
                  </div>
                  <div className="text-[21px] leading-[28px] pt-[20px]">
                    <div>
                      <span className="text-main">+</span> Common encryption
                      using multi-DRM (widevine, playready, fairplay), Sigma DRM{' '}
                    </div>
                    <div>
                      <span className="text-main">+</span> Encrypted with key
                      rotation{' '}
                    </div>
                    <div>
                      <span className="text-main">+</span> Encryption standards:
                      CENC, SAMPLE-AES{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col">
        <div className="mx-[184px]">
          <div>
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[105px] pb-[20px]">
              <span className="text-main">Protect & Maximize</span> Your Revenue
              with FAW
            </div>
          </div>
          <div className="flex flex-col mb-32">
            {SIGMA_TRANSCODER2.map((e, index) => (
              <div
                key={index}
                className="trans flex justify-between rounded-[10px] border-[1px] border-solid border-[#4D4D4D] shadow-2xl mb-[60px]"
              >
                <img
                  style={{ order: e.id % 2 === 1 ? 2 : 1 }}
                  src={e.img}
                  alt=""
                />
                <div
                  style={{ order: e.id % 2 === 1 ? 1 : 2 }}
                  className="px-24"
                >
                  <div className="font-bold text-[22px] mt-10 mb-8">
                    {e.title}
                  </div>
                  <div className="w-[840px] text-[18px] text-[#000]">
                    {e.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-medium text-[30px] leading-[30px] text-center pb-[53px]">
            Let share your <span className="text-main">project</span> with Us
          </div>
          <div className="flex justify-center mb-24">
            <ButtonGeneral
              link={ROUTE.FREE_TRIAL}
              name="Free Trial"
              css="bg-main text-white w-[241px] active:bg-main/90"
            />
            <ButtonGeneral
              link={ROUTE.TALK_TO_EXPERT}
              name="Talk to a streaming expert"
              css="bg-white text-main w-[307px] active:bg-[#fafafa] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigmaTranscoder;
