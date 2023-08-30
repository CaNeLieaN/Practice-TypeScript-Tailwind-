"use client";

import React from "react";

function Sentence() {
  return (
    <div className="relative top-[9vw] left-[10vw] flex flex-col">
      <h1 className="text-white font-normal text-[7.2vw] font-prompt">
        Say yes
      </h1>
      <h2 className="text-[#F6FF1A] font-normal text-[7vw] font-prompt">
        To Your Vacation
      </h2>
      <p className="text-white font-normal text-[0.95vw] w-[35vw] font-prompt">
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Optio eaque sequi dolorum voluptates illum
        unde, ut nesciunt cupiditate. Praesentium ipsum
        animi nesciunt minima dicta repudiandae magni
        dignissimos cupiditate, accusamus eaque.
      </p>
      <button className="bg-[#EF5728] my-[3.6vw] w-[20vw] h-[4vw] relative bottom-[2vw]">
        <h1 className="text-white  text-[0.95vw] mr-[2vw] font-prompt font-semibold">
          FIND OUT MORE
        </h1>
      </button>
    </div>
  );
}

export default Sentence;
