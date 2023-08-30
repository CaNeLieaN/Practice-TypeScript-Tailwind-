"use client";

import React from "react";
import Image from "next/image";

import youtubeIcon from "../../../public/assets/Youtube.svg";
import IG from "../../../public/assets/Instragram.svg";
import facebookIcon from "../../../public/assets/Facebook.svg";
import x from "../../../public/assets/X.svg";

function TabSocail() {
  return (
    <div className="fixed z-30">
      <div className="flex flex-col relative top-[8vw] my-[3.6vw] h-[20vw] w-[4vw] bg-[#EF5728] rounded-r-3xl items-center justify-between">
        <button className="">
          <Image
            src={x}
            alt="X Icon"
            className="w-[9vw] h-[3vw] my-[1vw]"
          />
        </button>
        <button className="">
          <Image
            src={facebookIcon}
            alt="Facebook Icon"
            className="w-[6vw] h-[2vw] my-[1vw]"
          />
        </button>
        <button className="">
          <Image
            src={IG}
            alt="Instragram Icon"
            className="w-[6vw] h-[2vw] my-[1vw]"
          />
        </button>
        <button className="">
          <Image
            src={youtubeIcon}
            alt="Youtube Icon"
            className="w-[6vw] h-[2vw] my-[2vw]"
          />
        </button>
      </div>
    </div>
  );
}

export default TabSocail;
