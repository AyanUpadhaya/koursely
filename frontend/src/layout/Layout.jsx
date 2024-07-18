import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
const Layout = () => {
  return (
    <main className="overflow-hidden flex flex-col min-h-screen ">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Layout;
