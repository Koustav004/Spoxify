import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-6 md:p-12 items-center gap-6 md:gap-0"
    >
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl flex flex-col gap-2">
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdOutlineEmail size={20} />
          koustavrudra2004@gmail.com
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdOutlineEmail size={20} />
          dipanlahiri207official@gmail.com
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <CiLinkedin />
          linkedin.com/in/koustav-r-517a47322
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <CiLinkedin />
          linkedin.com/in/dipan-lahiri
        </li>
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <FaGithub />
          github.com/grahamnickbel23
        </li>
         <li className="flex gap-2 items-center justify-center md:justify-start">
          <FaGithub />
          github.com/Koustav004
        </li>
      </ul>
    </div>
  );
};

export default Footer;