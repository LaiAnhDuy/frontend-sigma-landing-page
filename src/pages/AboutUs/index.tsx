import React from 'react';
import { IMAGE_PATH } from 'src/constants/images';
import './index.style.css';
import { solutions, timelines } from './config';
import ROUTE from 'src/constants/route';
import { useNavigate } from 'react-router-dom';

const TimelineItem = ({
  year,
  description,
}: {
  year: number;
  description: string;
}) => {
  return (
    <div>
      <p className="text-[50px] text-main font-bold">{year}</p>
      <hr className="color-hr w-[300px] h-[17px] rounded-[20px] -mt-12"></hr>
      <p className="text-[#4D4D4D] mt-6 font-normal">{description}</p>
    </div>
  );
};

const SolutionItem = ({ solution }: { solution: string }) => {
  return (
    <div>
      <div className="flex leading-3">
        <p className="text-main font-medium">+</p>
        <p className="ml-1 color-p font-normal">{solution}</p>
      </div>
    </div>
  );
};

export default function AboutUs() {
  const navigate = useNavigate();
  const goToFreeTrial = () => {
    navigate(ROUTE.FREE_TRIAL);
  };

  return (
    <div className="container m-auto">
      <div className="">
        <h1 className="text-[50px] text-[#4D4D4D]">About us</h1>
        <p className="text-main text-[21px] font-medium -mt-5">
          We are proud of over 10 years of experience in developing technology
          solutions for content providers and telecom businesses in Vietnam and
          international market. Our goal is to provide best-in-class solutions
          with the highest quality services for customers
        </p>
        <img className="w-full" src={IMAGE_PATH.ABOUT_US} alt=""></img>
        <p className="text-[21px] text-[#4D4D4D] font-normal">
          Thu Do Multimedia is Vietnam's leading company in digital TV solutions
          for content providers, service providers and streaming platforms. We
          are confident to bring the "Make in Vietnam" business solution chain
          completely built by ourself.
        </p>
        <p className="text-[21px] text-[#4D4D4D] font-normal">
          Leveraging a unique R&D team in the video industry, Thu Do Multimedia
          develops solutions that power sustainable TV services, protect the
          content digital rights, improve viewers` quality of experience,
          optimize the total cost of ownership of TV/VOD services, and generate
          new revenue streams based on personalization and ad insertion. Beyond
          technological agility, Thu Do Multimedia’s value proposition is to
          partner with its customers by offering highly flexible engagement and
          business models that match their financial priorities.{' '}
        </p>

        {timelines.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}

        <div className="grid grid-cols-[400px_minmax(900px,_1fr)]">
          {solutions.map((solution) => (
            <SolutionItem key={solution} solution={solution} />
          ))}
        </div>

        <div className="flex">
          <div className="">
            <h1 className="text-main text-[30px] font-bold">
              Ready to Get Started?
            </h1>
            <p className="color-p text-[21px] font-medium -mt-4 w-[563px]">
              Start streaming today with our integrated video platform.
            </p>
          </div>
          <button
            className="mt-7 ml-[565px] rounded-[4px] h-10 w-[135px] border-none bg-[#fd841f] text-lg font-medium text-[#FFFFFF] cursor-pointer active:bg-orange-300"
            type="button"
            onClick={goToFreeTrial}
          >
            Free trial
          </button>
        </div>
      </div>
    </div>
  );
}
