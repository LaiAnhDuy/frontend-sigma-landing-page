import './index.style.scss';
import { SIGMA_N53D, SIGMA_N53F } from 'src/constants/products';
import { IMAGE_PATH } from 'src/constants/images';

function SigmaN53() {
  return (
    <div className="container m-auto text-black">
      <div className="flex flex-col">
        <div className="flex justify-between h-[540px]">
          <div className="pt-9">
            <div className="relative z-[1] text-[55px] font-bold h-[150px] leading-[50px] pb-2 break-words">
              Sigma <span className="text-main">NS53</span> load balancing,
              system optimization
            </div>
            <div className="top-[-29px] relative bg-main/50 w-[276px] h-[30px] rounded-[20px]" />
            <div className="w-[501px] h-[90px] font-medium text-[21px] leading-[30px] pb-8">
              Scale your applications and improve availability, security, and
              performance across your infrastructure in a few clicks.
            </div>
            <button className="bg-main rounded-[4px] border-none text-white w-[177px] h-[46px] font-medium text-[16px] leading-4 cursor-pointer active:bg-main/90">
              Start your free trial
            </button>
          </div>
          <div className="">
            <img className="w-[900px]" src={IMAGE_PATH.TV_N53} alt="TV_N53" />
          </div>
        </div>

        <div className="flex justify-center flex-col">
          <div className="w-full h-[254px] bg-main rounded-[20px] flex justify-center flex-col mb-28 mt-20">
            <div className="flex justify-center font-bold text-[30px] text-white h-[42px] mb-5">
              What is a NS53 ?
            </div>
            <div className="flex justify-center h-28 leading-7 text-[21px] text-white px-[30px] break-words mb-[22px]">
              NS53 is a solution using DNS (Domain name system) to help balance
              the load and optimize server access to bring a better experience
              to customers. DNS load balancing is the practice of configuring a
              domain in the Domain Name System (DNS) such that client requests
              to the domain are distributed across a group of server machines.
            </div>
          </div>

          <div className="font-bold text-[30px] leading-[30px] text-center pb-[22px]">
            <span className="text-main">Key</span> Feature
          </div>
          <div className="grid grid-rows-2 grid-cols-3">
            {SIGMA_N53F.map((e, index) => (
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
      <div className="flex flex-col bg-[#F9F9F9]">
        <div className="">
          <div className="flex flex-col h-[804px]">
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[50px] pb-[20px]">
              The advantages of{' '}
              <span className="text-main">DNS load balancing</span> include:
            </div>
            <div className="flex justify-center h-[90px] text-center text-[21px] leading-[30px] pb-[50px]">
              <div className="w-[886px]">
                Developed to be managed under one roof, our OTT platform
                provides all you need to manage channels, customers, and
                billing. We are focus in R&D, constantly updating our apps to
                provide you the best UX/UI for your customers.
              </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center">
              {SIGMA_N53D.map((e, index) => (
                <div
                  key={index}
                  className="trans bg-white w-[350px] h-[471px] rounded-[10px] cursor-pointer"
                >
                  <div className="flex flex-col">
                    <img className="w-[350px] h-[185px]" src={e.img} alt="" />
                    <div className="p-[30px]">
                      <div className="text-main font-bold text-[16px] leading-4 w-[171px] h-4">
                        {e.title}
                      </div>
                      <div className="pt-[10px] text-[16px] h-4">
                        {e.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <div>
            <div className="w-full h-[43px] font-bold text-[30px] leading-[30px] text-center pt-[105px] pb-[20px]">
              The advantages of{' '}
              <span className="text-main">DNS load balancing</span> include:
            </div>
            <div className="flex justify-center h-[90px] text-center text-[21px] leading-[30px] pb-[50px]">
              <div className="w-[886px]">
                Developed to be managed under one roof, our OTT platform
                provides all you need to manage channels, customers, and
                billing. We are focus in R&D, constantly updating our apps to
                provide you the best UX/UI for your customers.
              </div>
            </div>
            <div className="flex justify-center items-center border-dashed border-[#A5A5A5] border-[3px] rounded-[10px] h-[487px]">
              <img src={IMAGE_PATH.DNSCS} alt="" />
            </div>
          </div>
          <div className="font-medium text-[30px] leading-[30px] text-center pb-[15px] pt-[100px] text-main">
            Do more with Load Balancers NS 53
          </div>
          <div className="flex justify-center font-medium text-[21px] leading-[21px] text-center pb-11">
            <div className="w-[847px] h-[23px]">
              Find out more about Load Balancers and creating highly available
              infrastructure with the help of step-by-step tutorials.
            </div>
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

export default SigmaN53;
