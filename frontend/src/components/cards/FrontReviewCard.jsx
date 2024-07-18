import React from 'react'

const FrontReviewCard = ({data}) => {
  return (
    <div className="bg-basecolor rounded flex flex-col px-4 py-10 ">
      <div className="flex justify-center">
        <img src={data?.imgUrl} className="max-w-24" alt="" />
      </div>

      <div className="p-4 rounded-b-md text-start flex-1 flex flex-col gap-2">
        
        <p className="text-xl font-semibold text-[#757575] italic">
          <span className="text-3xl">"</span> {data?.desc}{" "}
          <span className="text-3xl">"</span>
        </p>
        <h4 className="text-lg font-bold text-white">{data?.name}</h4>
        <h4 className="text-base  text-white">{data?.title}</h4>
        <p className="text-white text-xl font-semibold">
          {data?.organization}
        </p>
      </div>
    </div>
  );
}

export default FrontReviewCard