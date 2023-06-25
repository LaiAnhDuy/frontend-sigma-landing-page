import React from 'react';
import './index.style.css';
import { IMAGE_PATH } from 'src/constants/images';
export default function AboutUs() {
    return (
        <div className="container m-auto">
            <div className="">
                <h1 className="text-[50px] text-[#4D4D4D]">About us</h1>
                <p className="main-color text-[21px] font-medium -mt-5">We are proud of over 10 years of experience in developing technology solutions for content providers and telecom businesses in Vietnam and international market. Our goal is to provide best-in-class solutions with the highest quality services for customers</p>
                <img className="w-full" src={IMAGE_PATH.ABOUT_US} alt=""></img>
                <p className="text-[21px] text-[#4D4D4D] font-normal">Thu Do Multimedia is Vietnam's leading company in digital TV solutions for content providers, service providers and streaming platforms. We are confident to bring the "Make in Vietnam" business solution chain completely built by ourself.</p>
                <p className="text-[21px] text-[#4D4D4D] font-normal">Leveraging a unique R&D team in the video industry, Thu Do Multimedia develops solutions that power sustainable TV services, protect the content digital rights, improve viewers’ quality of experience, optimize the total cost of ownership of TV/VOD services, and generate new revenue streams based on personalization and ad insertion. Beyond technological agility, Thu Do Multimedia’s value proposition is to partner with its customers by offering highly flexible engagement and business models that match their financial priorities. </p>
                <div className="">
                    <p className=" text-[50px] main-color font-bold">2019</p>
                    <hr className="color-hr w-[300px] h-[17px] rounded-[20px] -mt-12"></hr>
                    <p className='text-[16px] text-[#4D4D4D] mt-6 font-normal w-[1110px]'>Sigma DRM, No.1st enterprise in Vietnam and the 20th enterprise in the world that met international security standards and received certification from Cartesian Organization</p>

                </div>
                <div>
                    <p className="main-color text-[50px] font-bold">2020</p>
                    <hr className="color-hr w-[300px] h-[17px] rounded-[20px] -mt-12"></hr>
                    <p className='text-[16px] text-[#4D4D4D] font-normal'>Vietnam’s Leading and No.1st enterprise as one of the largest OTT technical solution providers in Vietnam</p>
                </div>
                <div>
                    <p className="text-[50px] main-color font-bold">2020</p>
                    <hr className="color-hr w-[300px] h-[17px] rounded-[20px] -mt-12"></hr>
                    <p className="color-p text-[16px] font-medium">Our total Sigma Solution suite includes:</p>

                </div>
                <div className="flex -mt-4">
                    <div>
                        <div className="flex">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma DRM/ Multi DRM</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Origin Packager</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Interactive</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Transcoder</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Livestreaming</p>
                        </div>
                    </div>
                    <div className="ml-40">
                        <div className="flex">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Multi CDN</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Dynamic Ads Insert</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma Audio Water Marking</p>
                        </div>
                        <div className="flex -mt-6">
                            <p className="main-color font-medium text-[16px]">+</p>
                            <p className="ml-1 color-p font-normal text-[16px]">Sigma NS53</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <h1 className="main-color text-[30px] font-bold">Ready to Get Start?</h1>
                        <p className="color-p text-[21px] font-medium -mt-4 w-[563px]">Start streaming today with our integrated video platform.</p>
                    </div>
                    <div>
                        <button className="mt-7 ml-[812px] rounded-[4px] h-10 w-[135px] border-none bg-[#fd841f] text-[16px] font-medium text-[#FFFFFF]" type="button">Free trial</button>
                    </div> 
                </div>
            </div>

        </div>
    )
}