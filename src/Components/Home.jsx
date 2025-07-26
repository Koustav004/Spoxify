import React from "react";
import LOGO from "../Assets/LOGO.png";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-6 md:p-20 gap-8">
      <div className="w-full md:w-2/4 pt-4 md:pt-10">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <img className="w-32 md:w-64" src={LOGO} alt="" />
          <div className="ml-4 md:ml-8 flex items-baseline-last justify-end">
            <a href="#About"><button className="mt-10 md:mt-20 text-white py-2 px-20 text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Go to Spoxify
            </button>
            </a>
          </div>
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
