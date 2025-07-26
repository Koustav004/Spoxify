import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between items-center text-[#B53D3D] w-full h-20 px-4 md:px-20 relative">
      <span className="text-xl font-bold tracking-wide">Spoxify</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black bg-opacity-90 px-4 py-4 rounded-b-xl md:rounded-none md:static md:bg-transparent md:w-auto md:flex md:items-center md:gap-6 md:py-0 md:px-0 font-semibold text-center transition-all duration-300 z-10`}
      >
        <a href="#About">
          <div className="justify-start text-white text-base md:text-xl font-bold font-['Istok_Web'] leading-10">ABOUT US</div>
        </a> 
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-6 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-6 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;