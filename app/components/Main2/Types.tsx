"use client";

import React from "react";
import Image from "next/image";

import pic3Main2 from "../../../public/assets/Pic3main2.svg";
import pic2Main2 from "../../../public/assets/Pic2main2.svg";
import pic1Main2 from "../../../public/assets/Pic1main2.svg";

function Types() {
  return (
    <div className="flex flex-row relative left-[1.5vw] bottom-[7vw]">
      <div>
        <Image
          src={pic1Main2}
          alt="Nuture view"
          className="relative top-[7.5vw] left-[7vw] w-[23vw] h-[23vw] mx-[1.5vw]"
        />
        <h3 className="text-white text-[1.5vw] relative bottom-[14vw] left-[12vw] font-poppins font-bold">
          TRAVELING
        </h3>
        <p className="text-white text-[1vw] relative bottom-[2vw] left-[10vw] w-[13vw] font-poppins font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit sed
        </p>
      </div>
      <div>
        <Image
          src={pic2Main2}
          alt="Nuture view"
          className="relative top-[7.5vw] left-[7vw] w-[23vw] h-[23vw] mx-[1.5vw]"
        />
        <h3 className="text-white text-[1.5vw] relative bottom-[14vw] left-[12vw] font-poppins font-bold">
          FOOD
        </h3>
        <p className="text-white text-[1vw] relative bottom-[2vw] left-[10vw] w-[13vw] font-poppins font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit sed
        </p>
      </div>
      <div>
        <Image
          src={pic3Main2}
          alt="Nuture view"
          className="relative top-[7.5vw] left-[7vw] w-[23vw] h-[23vw] mx-[1.5vw]"
        />
        <h3 className="text-white text-[1.5vw] relative bottom-[14vw] left-[12vw] font-poppins font-bold">
          EVENT
        </h3>
        <p className="text-white text-[1vw] relative bottom-[2vw] left-[10vw] w-[13vw] font-poppins font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit sed
        </p>
      </div>
    </div>
  );
}

export default Types;
