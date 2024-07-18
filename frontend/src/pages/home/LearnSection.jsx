import React from "react";
import { correct, learn } from "../../assets/getAssets";

const LearnSection = () => {
  return (
    <div className="font-roboto py-[100px] bg-basecolor px-6 ">
      <div className="cscontainer relative space-y-10 ">
        <div className="flex w-full justify-center items-center">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-white font-bold text-5xl">
              Learn at Your Own Pace
            </h2>
            <p className="text-[#757575] text-xl">
              Flexibility to Fit Your Lifestyle
            </p>
          </div>
        </div>
        <div className="px-10 space-y-10 ">
          <div className="w-full  rounded-xl border-2 border-[#f48c06] p-5 grid grid-cols-2">
            <div className="p-5 flex flex-col justify-center">
              <div className="text-white mb-5 text-lg">
                At our e-learning platform, you have the freedom to learn
                whenever and wherever you want. Whether you’re balancing a
                full-time job, family commitments, or other responsibilities,
                our courses are designed to fit into your busy life.
              </div>
              <ul className="text-white space-y-5 max-w-full">
                <li className="flex gap-2 items-center">
                  <img
                    src={correct}
                    className="w-10 h-10 object-cover"
                    alt=""
                  />
                  <div className="text-lg">
                    No strict schedules. Start your course anytime and progress
                    at your own
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src={correct}
                    className="w-10 h-10 object-cover"
                    alt=""
                  />
                  <div className="text-lg">
                    Access Anytime, Anywhere: Learn from your laptop, tablet, or
                    smartphone. Our platform is accessible 24/7.
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src={correct}
                    className="w-10 h-10 object-cover"
                    alt=""
                  />
                  <div className="text-lg">
                    Personalized Learning Experience: Tailor your learning
                    journey to your needs and goals. Choose courses that match
                    your interests and career aspirations.
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src={correct}
                    className="w-10 h-10 object-cover"
                    alt=""
                  />
                  <div className="text-lg">
                    Comprehensive Resources: Access a wide range of learning
                    materials, including videos, articles, quizzes, and more to
                    enhance your understanding.
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-3">
              <img src={learn} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="text-white mb-5 text-lg text-center px-20">
              Join thousands of learners who have already transformed their
              lives with our flexible and accessible courses. Enroll today and
              take the first step toward achieving your dreams!
            </div>
            <div>
              <button className="cta-button-lg">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
