"use client";

import Image from "next/image";
import roiUpIcon from "../../../public/assets/icon.svg";

function Footer() {
  return (
    <div className="flex flex-row w-[85.3vw] h-[12.88vw] relative left-[5vw] border bg-[#FFFFFF] font-normal text-[1vw] p-[3vw] mt-[3.5vw] rounded-2xl">
      <div className="flex flex-col relative right-[2vw] bottom-[2.5vw] mx-[5vw] font-prompt">
        <Image
          src={roiUpIcon}
          alt="Roi Up Icon"
          className="w-[9vw] h-[2.95vw] my-[1vw]"
        />
        <h2>ROTUP STUDIOS C0., LTD.</h2>
        <p>
          258 M.2 Sanpatong Chiang Mai
          <br />
          09XXXXXXXX
          <br />
          Roiup@info.com
        </p>
      </div>
      <div className="flex flex-col mx-[5vw]">
        <h2 className="text-[#EF5728] text-[1vw] font-semibold font-prompt">
          Pages
        </h2>
        <a
          href="#"
          className="font-normal"
        >
          Home
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Destination
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Contract Us
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Blog
        </a>
      </div>
      <div className="flex flex-col mx-[5vw]">
        <h2 className="text-[#EF5728] text-[1vw] font-semibold font-prompt">
          Legal
        </h2>
        <a
          href="#"
          className="font-normal"
        >
          Datenschutz
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Impressum
        </a>
        <a
          href="#"
          className="font-normal"
        >
          AGB
        </a>
      </div>
      <div className="flex flex-col mx-[5vw]">
        <h2 className="text-[#EF5728] text-[1vw] font-semibold font-prompt">
          Social Media
        </h2>
        <a
          href="#"
          className="font-normal"
        >
          Facebook
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Instragram
        </a>
        <a
          href="#"
          className="font-normal"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Footer;
