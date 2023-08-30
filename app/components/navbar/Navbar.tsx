"use client";

import Image from "next/image";

import userIcon from "../../../public/assets/userIcon.svg";
import roundWhite from "../../../public/assets/RoundWhite.svg";
import roiUpIcon from "../../../public/assets/icon.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-white h-[8.65vw] border-[#707070] relative z-10">
      <div className="flex w-[9vw] my-[3.6vw] ml-[7.5vw]">
        <Image
          src={roiUpIcon}
          alt="Roi Up Icon"
          className="w-[9vw] h-[2.95vw]"
        />
      </div>
      <div className="flex flex-row text-[0.95vw] ml-[10vw] items-center relative left-[5vw] font-prompt font-semibold">
        <a
          href="#"
          className="text-[#2B2B2A] border-[#707070] mx-[3vw]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#2B2B2A] border-[#707070] mx-[3vw]"
        >
          Destination
        </a>
        <a
          href="#"
          className="text-[#2B2B2A] border-[#707070] mx-[3vw]"
        >
          Contact us
        </a>
        <a
          href="#"
          className="text-[#2B2B2A] border-[#707070] mx-[3vw]"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-[#2B2B2A] border-[#707070] mx-[3vw]"
        >
          Sign Up
        </a>
      </div>
      <div className="flex flex-row bg-[#EF5728] w-[11.5vw] h-[3.83vw] top-[3vw] rounded-3xl relative left-[10vw]">
        <button className="flex flex-row text-[0.95vw] text-white font-bold items-center relative z-0 ml-[5vw]">
          <Image
            src={roundWhite}
            alt="User Icon"
            className="w-[3vw] h-[3vw] absolute z-20 right-[4vw]"
          />
          <Image
            src={userIcon}
            alt="User Icon"
            className="w-[3vw] h-[3vw] absolute z-30 right-[4vw] font-prompt font-bold"
          />
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
