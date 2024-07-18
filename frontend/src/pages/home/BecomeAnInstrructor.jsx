import React from 'react'
import { instructor } from '../../assets/getAssets';

const BecomeAnInstrructor = () => {
  return (
    <div className="font-poppins pt-[100px] bg-[#332D2D] px-6 ">
      <div className="cscontainer relative">
        <div className="flex flex-row-reverse w-full justify-center items-center gap-10">
          <div className="text-start flex flex-col gap-6">
            <h2 className="text-white font-bold text-5xl">
              Become an instructor
            </h2>
            <p className="text-white text-xl pr-10">
              Instructors from around the world teach millions of learners on
              Koursely. We provide the tools and skills to teach what you love.
            </p>
            <div>
              <button className="cta-button-lg">Get Started Now</button>
            </div>
          </div>
          <div className="p-3 shrink-0">
            <img src={instructor} className="max-w-full" alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BecomeAnInstrructor