import React from "react";
import { Link } from "react-router-dom";
import { books } from "../../assets/getAssets";

const Footer = () => {
  return (
    <div className="w-full bg-[#0f0f0f] font-poppins shadow-md border-t-2 border-t-[#f48c06]">
      <nav className="cscontainer relative flex w-full flex-nowrap items-center justify-between  py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between gap-5 px-3">
          <div className="mx-2 flex gap-2 items-center">
            <img src={books} className="w-8 h-8 object-cover" alt="" />
            <Link className="text-xl text-neutral-100 uppercase" to="/">
              Koursely
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-white">
              <Link to={"/"}>Facebook</Link>
            </div>
            <div className="text-white">
              <Link to={"/"}>Courses</Link>
            </div>
            <div className="text-white">
              <Link to={"/"}>Blog</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
