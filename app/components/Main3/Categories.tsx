"use client";

import Image from "next/image";
import pic1Main3 from "../../../public/assets/Pic1main3.svg";
import pic2Main3 from "../../../public/assets/Pic2main3.svg";

function Categories() {
  return (
    <div className="flex flex-col w-[59vw] relative left-[10vw] top-[8vw] text-white font-prompt font-semibold">
      <div className="flex flex-row relative bottom-[10vw] w-[60vw]">
        <button className="bg-[#EF5728] my-[1vw] mx-[1vw] px-[2vw] w-auto h-[3.1vw] text-[1.3vw]">
          CATEGORY 1
        </button>
        <button className="bg-[#CBCBCB] my-[1vw] mx-[1vw] px-[2vw] w-auto h-[3.1vw] text-[1.3vw]">
          CATEGORY LOREM 2
        </button>
        <button className="bg-[#CBCBCB] my-[1vw] mx-[1vw] px-[2vw] w-auto h-[3.1vw] text-[1.3vw]">
          CATEGORY LOREM IPSUM 3
        </button>
      </div>
      <div className="flex flex-row relative bottom-[18vw] right-[10vw]">
        <div className="relative bottom-[2vw] left-[2.3vw] w-[13vw] h-[13vw]">
          <Image
            src={pic1Main3}
            alt="Nuture view"
            className="relative top-[7.5vw] left-[7vw] w-[23vw] h-[23vw] mx-[1.5vw]"
          />
        </div>
        <div className="w-[56.6vw] h-[15vw] relative top-[9.5vw] left-[11vw] border border-[#FFFFFF] text-white font-normal text-[1vw] p-[3vw]">
          <h2 className="text-[#EF5728] text-[1.5vw] font-poppins font-bold">
            Lorem ipsum
          </h2>
          <h3 className="text-[#9C9C9C] font-poppins">
            NOV 12 2022 5:45M
          </h3>
          <p className="text-[#66676F] font-poppins">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Deserunt corrupti eaque culpa.
            Perspiciatis, esse provident excepturi obcaecati
            veritatis est quibusdam aliquid ipsa hic quos
            molestiae dicta magni perferendis, sint alias?
          </p>
        </div>
      </div>
      <div className="flex flex-row relative bottom-[18vw] right-[10vw]">
        <div className="relative top-[5vw] left-[2.3vw] w-[13vw] h-[19vw]">
          <Image
            src={pic2Main3}
            alt="Nuture view"
            className="relative top-[7.5vw] left-[7vw] w-[23vw] h-[23vw] mx-[1.5vw]"
          />
        </div>
        <div className="w-[56.6vw] h-[21.5vw] relative top-[10vw] left-[11vw] border border-[#FFFFFF] text-white font-normal text-[1vw] p-[3vw] mt-[3.5vw]">
          <h2 className="text-[#EF5728] text-[1.5vw] font-poppins font-bold">
            Lorem ipsum
          </h2>
          <h3 className="text-[#9C9C9C] font-poppins">
            NOV 12 2022 5:45M
          </h3>
          <p className="text-[#66676F] font-poppins">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sed cum hic non laborum,
            labore blanditiis eveniet deserunt nam harum
            deleniti corrupti! Dolor ipsum modi quod
            architecto velit, fuga corporis ratione.sit amet
            consectetur adipisicing elit. Sed cum hic non
            laborum, labore blanditiis eveniet deserunt nam
            harum deleniti corrupti! Dolor ipsum modi quod
            architecto velit, fuga corporis ratione.sit amet
            consectetur adipisicing elit. Sed cum hic non
            laborum, labore blanditiis eveniet deserunt nam
            harum deleniti corrupti! Dolor ipsum modi quod
            architecto velit, fuga corporis ratione.sit amet
            consectetur adipisicing elit. Sed cum hic non
            laborum, labore blanditiis eveniet deserunt nam
            harum deleniti corrupti! Dolor ipsum modi quod
            architecto velit, fuga corporis ratione.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
