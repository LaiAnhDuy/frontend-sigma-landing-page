import './index.style.scss';
import { SIGMA_DAI } from 'src/constants/products';
import { IMAGE_PATH } from 'src/constants/images';

function SigmaDai() {
  return (
    <div className="text-black">
      <div className="flex flex-col">
        <div className="flex justify-between h-[540px] mx-[184px]">
          <div className="pt-9">
            <div className="relative z-[1] text-[55px] font-bold h-[100px] leading-[50px] pb-2 pr-8">
              Enable <span className="text-main">ADS Insertion</span> Everywhere
            </div>
            <div className="top-[-29px] relative bg-main/50 w-[302px] h-[30px] rounded-[20px]" />
            <div className="w-[501px] h-[120px] font-medium text-[21px] leading-[30px] pb-8">
              Dynamic Ad Insertion – also known as Server-side ad insertion
              (SSAI) – enables the seamless delivery of video ads into content
              streamed on internet-enabled devices.
            </div>
            <button className="bg-main rounded-[4px] border-none text-white w-[248px] h-[46px] font-medium text-[16px] leading-4 cursor-pointer hover:bg-[#eb694c]">
              Request your free DRM trial
            </button>
          </div>
          <div className="">
            <img className="w-[900px]" src={IMAGE_PATH.TV_DAI} alt="TV_DAI" />
          </div>
        </div>

        <div className="flex justify-center flex-col px-[184px]">
          <div className="font-bold text-[30px] leading-[30px] text-center pb-[22px]">
            <span className="text-main">Key</span> Feature
          </div>
          <div className="grid grid-rows-2 grid-cols-3">
            {SIGMA_DAI.map((feature, index) => (
              <div key={index} className="feature-element py-12 px-24 cursor-pointer">
                <div className="flex justify-center flex-col">
                  <div className="flex justify-center pb-5">
                    <img
                      className="w-[140px] h-[140px]"
                      src={feature.img}
                      alt=""
                    />
                  </div>
                  <div className="font-medium text-[21px] leading-[21px] text-center pb-[10px]">
                    {feature.name}
                  </div>
                  <div className="font-normal text-[16px] leading-4 text-center">
                    {feature.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-normal text-[30px] leading-[30px] text-center pt-16">
            Globally, <span className="text-main">42.7%</span> of internet users
            use ad blockers.
          </div>
          <div className="font-medium text-[50px] leading-[50px] text-center pt-5 pb-[50px]">
            <span className="text-main">Avoiding</span> Ad Blockers for Video
            Monetization
          </div>
          <div className="flex justify-center items-center border-dashed border-[#A5A5A5] border-[3px] rounded-[10px] h-[487px]">
            <img src={IMAGE_PATH.BLOCKES_1} alt="" />
          </div>
          <div className="pt-[20px] font-normal text-[21px] text-center text-[#000] pb-[50px]">
            By integrating content and ads into one continuous stream, SSAI
            provides a seamless viewing experience, similar to a traditional
            advertising break. We offers SSAI technology that makes it possible
            to exchange and insert TV spots on the fly, so broadcasters can
            increase yield from linear streams within OTT and web environments
          </div>
          <div className="flex justify-center items-center border-dashed border-[#A5A5A5] border-[3px] rounded-[10px] h-[487px]">
            <img src={IMAGE_PATH.BLOCKES_2} alt="" />
          </div>
          <div className="pt-[20px] font-normal text-[21px] text-center text-[#000] pb-[100px]">
            Users stream video or OTT content on internet-enabled devices via
            content delivery networks (CDNs). When a user reaches an ad break,
            the SSAI server requests ads from third-party ad servers. The SSAI
            server then stitches those ads – at the same bitrate, frame rate and
            audio level as the underlying stream – directly into the content,
            which is passed back to the viewing device via the CDN.
          </div>
          <div className="font-medium text-[30px] leading-[30px] text-center pb-[53px]">
            Let share your <span className="text-main">project</span> with Us
          </div>
          <div className="flex justify-center mb-24">
            <button className="bg-main rounded border-main border-[1px] border-solid text-white text-[21px] w-[241px] h-[50px] cursor-pointer mr-[50px] hover:bg-[#eb694c]">
              Free Trial
            </button>
            <button className="bg-white rounded border-main border-[1px] border-solid text-main text-[21px] w-[307px] h-[50px] cursor-pointer hover:bg-[#cfcbcb]">
              Talk to a Streaming Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigmaDai;
