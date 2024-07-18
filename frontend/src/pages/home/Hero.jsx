import React from 'react'
import { hero } from '../../assets/getAssets';

const Hero = () => {
  return (
    <div className="font-roboto pt-16 bg-basecolor ">
      <div className="cscontainer relative flex w-full flex-wrap items-center ">
        <div className="lg:w-1/2 px-10 flex flex-col gap-10">
          <h2 className="text-6xl font-extrabold leading-20 text-white">
            Unlock Your Potential with Our{" "}
            <span className="text-[#f48c06]">E-Learning Platform</span>
          </h2>
          <div>
            <p className="text-black-600">
              Discover a variety of courses and start learning today. <br />{" "}
              Gain new skills, advance your career, and achieve your goals with
              us.
            </p>
            <div className="mt-6">
              <button className="cta-button-sm">Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} className="max-w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero