import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import FrontReviewCard from "../../components/cards/FrontReviewCard";
import { profileicon } from "../../assets/getAssets";

const FrontReviews = () => {
  const reviewData = [
    {
      name: " Ismaeel Ameen",
      desc: " To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Koursely Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
      title: `Head of Data Engineering`,
      organization: "Development and Data Management",
      imgUrl: `${profileicon}`,
    },
    {
      name: " Karen Hunter",
      desc: " Koursely has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace..",
      title: `America's Team Lead`,
      organization: "Learning & Development",
      imgUrl: `${profileicon}`,
    },
  ];
  return (
    <div className="font-roboto py-[100px] bg-[#332D2D] px-6 ">
      <div className="cscontainer relative  ">
        <div className="flex  w-full justify-center items-center">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-white font-bold text-5xl">
              What Our Learners Say
            </h2>
            <p className="text-[#757575] text-xl">
              Hear from those who have transformed their lives with our courses
            </p>
          </div>
        </div>
        <div className="mt-16 ">
          <div className="max-w-[1176px] mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation, FreeMode]}
              className="mySwiper"
            >
              {reviewData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <FrontReviewCard data={item}></FrontReviewCard>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontReviews;
