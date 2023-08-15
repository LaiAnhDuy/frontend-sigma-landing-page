import React from 'react';
import './index.style.css';
export default function ContactUs() {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h1 className="text-[50px] font-bold text-black mb-0">Get in touch</h1>
        <p className="text-[21px] font-medium text-black mt-3">
          Please contact us in the following ways:
        </p>
      </div>
      <div className="bg-[#F9F9F9]">
        <div className="container grid grid-cols-2 mx-auto m-32">
          <div className="text-center my-auto mt-24 mb-24">
            <h1 className="text-4xl text-black font-medium">Talk to Sale</h1>
            <p className="text-2xl font-normal text-[#000000] mb-0">
              Just pick up the phone and chat with us
            </p>
            <hr className="hr-color w-[299px] h-[17px] rounded-[20px] mx-auto mt-1"></hr>
            <p className="text-main text-3xl font-normal mb-0">Sale team:</p>
            <p className="text-main text-3xl font-normal mt-1 mb-0">
              (+84) 912993743{' '}
            </p>
            <p className="text-main text-3xl font-normal mt-1">
              (+84) 24 3668 7038 - ext 123
            </p>
          </div>
          <div className="text-center mt-24 mb-24">
            <h1 className="text-4xl text-black font-medium">
              Contact Customer Support
            </h1>
            <p className="text-2xl font-normal text-[#000000] mb-0">
              Don't worry, We're here for you
            </p>
            <hr className="hr-color w-[299px] h-[17px] rounded-[20px] mx-auto mt-1"></hr>
            <p className="text-main text-3xl font-normal">
              24/7 Callcenter: 1900 585868
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
