import React from 'react';
import './index.style.css';
import { IMAGE_PATH } from 'src/constants/images';
export default function Support() {
    return (
        <div className="">
            <div className="container m-auto">
                <h1 className="text-[50px] font-bold text-[#4D4D4D]">Support</h1>
                <p className="text-[21px] font-medium text-[#4D4D4D]">Please contact us in the following ways:</p>
                {/* <img className="w-full mt-3" alt="" src={IMAGE_PATH.SUPPORT} ></img> */}
                <div  className="bg-repeat-round bg-cover h-[800px] grid grid-cols-5 gap-x-4" style={{ backgroundImage: `url(${IMAGE_PATH.SUPPORT})` }}>
                    <img className="col-span-3 m-auto" alt="" src={IMAGE_PATH.SUPPORT_ELEMENT} ></img>
                    <div className="col-span-2 text-white my-auto">
                        <h1 className="text-[30px] font-medium mb-0">Talk to Sale</h1>
                        <p className="text-lg font-normal my-0">Sale team:</p>
                        <p className="text-lg font-normal m-0">(+84) 912993743</p>
                        <p className="text-lg font-normal m-0">(+84) 24 3668 7038 - ext </p>
                        <p className="text-lg font-normal " >Email: sales@gviet.vn</p>
                        <h1 className="text-[30px] font-medium mb-0">Contact Customer Support</h1>
                        <p className="text-lg font-normal mt-2">24/7 Callcenter: 1900 585868</p>
                    </div>
                </div>
            </div>
        </div>
    );
};