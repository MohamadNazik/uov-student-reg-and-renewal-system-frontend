import React from "react";
import uni_logo from "../assets/uov_logo.png";
import logout_icon from "../assets/icons/logout_icon.png";

function Header() {
  return (
    <div className="w-full bg-[#391031] flex items-center justify-between px-[40px] md:px-[100px] py-3 md:py-6">
      <img
        src={uni_logo}
        alt="university_logo"
        className="w-10 h-10 md:w-14 md:h-14"
      />

      <h1 className="text-white text-lg md:text-3xl font-semibold">
        Dashboard
      </h1>

      <img
        src={logout_icon}
        alt="logout_icon"
        className="w-h-6 h-6 md:w-10 md:h-10 cursor-pointer"
      />
    </div>
  );
}

export default Header;