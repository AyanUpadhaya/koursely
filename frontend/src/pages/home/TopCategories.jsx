import React from "react";
import { web, design, data, business } from "../../assets/getAssets";
import Category from "../../components/cards/Category";

const TopCategories = () => {
  const categoriesData = [
    {
      title: " Web Development",
      desc: " Master the art of building websites and applications.",
      imgUrl: `${web}`,
    },
    {
      title: "Data Science",
      desc: " Dive into data analysis, machine learning, and AI.",
      imgUrl: `${data}`,
    },
    {
      title: "Business",
      desc: " Learn strategies to succeed in the corporate world.",
      imgUrl: `${business}`,
    },
    {
      title: "Design",
      desc: " Enhance your creativity with design courses.",
      imgUrl: `${design}`,
    },
  ];
  return (
    <div className="font-roboto py-[100px] bg-[#332D2D] px-6 ">
      <div className="cscontainer relative  ">
        <div className="flex  w-full justify-center items-center">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-white font-bold text-5xl">
              Explore Our Categories
            </h2>
            <p className="text-[#757575] text-xl">
              Find courses in a range of topics, tailored to your interests and
              goals.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-4 gap-4">
          {/* cards loop */}
          {categoriesData.map((item, index) => (
            <Category key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
