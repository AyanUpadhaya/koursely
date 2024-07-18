import React from 'react'
import { Link } from 'react-router-dom';
import { books } from '../../assets/getAssets';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[1000] w-full bg-[#332d2de0] font-poppins shadow-md border-b-2 border-b-[#f48c06]">
      <nav className="cscontainer relative flex w-full flex-nowrap items-center justify-between  py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="mx-2 flex gap-2 items-center">
            <img src={books} className="w-8 h-8 object-cover" alt="" />
            <Link className="text-xl text-neutral-100 uppercase" to="/">
              Koursely
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-white">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="text-white">
              <Link to={"/"}>Courses</Link>
            </div>
            <div className="text-white">
              <Link to={"/"}>Blog</Link>
            </div>
            <div className="text-white">
              <Link to={"/"}>About</Link>
            </div>
            <div>
              <button className="login-btn">Login</button>
            </div>
            <div>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar