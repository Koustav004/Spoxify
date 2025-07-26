import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="flex flex-col md:flex-row items-center">

            <div className="flex gap-3 py-4 w-full">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-full md:w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-xs md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
                </p>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;