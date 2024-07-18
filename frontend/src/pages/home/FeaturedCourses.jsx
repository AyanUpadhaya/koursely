import React from "react";
import { web, design, data, business } from "../../assets/getAssets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";


const FeaturedCourses = () => {
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
              Explore Featured Courses
            </h2>
            <p className="text-[#757575] text-xl">
              Check out some of our most popular courses and start learning
              today.
            </p>
          </div>
        </div>
        <div className="mt-16 ">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, FreeMode]}
            className="mySwiper"
          >
            {categoriesData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="border-2 border-[#f48c06]  rounded-xl  flex flex-col cursor-pointer scale-95 hover:scale-100 duration-300">
                    <div className="px-4 py-2  rounded-t-md h-[300px]">
                      <img
                        src={item?.imgUrl}
                        className="max-w-full rounded-t-md"
                        alt=""
                      />
                    </div>
                    <div className="bg-[#f48c06] p-4 rounded-b-md text-center flex-1 flex flex-col gap-1">
                      <h4 className="text-xl font-bold text-blackHigh">
                        {item?.title}
                      </h4>
                      <p className="text-white text-sm">{item?.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
