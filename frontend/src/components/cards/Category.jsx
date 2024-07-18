import React from 'react'

const Category = ({data}) => {
  return (
    <div
      className="border-2 border-[#f48c06]  rounded-xl  flex flex-col cursor-pointer scale-95 hover:scale-100 duration-300"
    >
      <div className="px-4 py-2  rounded-t-md h-[300px]">
        <img src={data?.imgUrl} className="max-w-full rounded-t-md" alt="" />
      </div>
      <div className="bg-[#f48c06] p-4 rounded-b-md text-center flex-1 flex flex-col gap-1">
        <h4 className="text-xl font-bold text-blackHigh">{data?.title}</h4>
        <p className="text-white text-sm">{data?.desc}</p>
      </div>
    </div>
  );
}

export default Category