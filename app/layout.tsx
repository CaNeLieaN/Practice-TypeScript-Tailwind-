"use client";

import "./globals.css";

import React from "react";
import Image from "next/image";
import graphic1 from "../public/assets/Somethingdesign.svg";
import graphic2 from "../public/assets/SomethingDesign2.svg";
import book from "../public/assets/book.svg";

import Navbar from "./components/navbar/Navbar";

import Carousel from "./components/Main1/Carousel";
import TabSocail from "./components/Main1/TabSocail";
import Sentence from "./components/Main1/Sentence";
import Types from "./components/Main2/Types";
import Categories from "./components/Main3/Categories";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "RoiUp",
  description: "RoiUp Digital Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col relative h-full">
          <Carousel />

          <div className="absolute z-30">
            <TabSocail />
          </div>
          <div className="absolute z-10">
            <Sentence />
          </div>
          <div className="flex flex-col bg-[#404040] h-[45vw] relative bottom-[20vw]">
            <Image
              src={graphic1}
              alt="Graphic design"
            />
            <Types />
          </div>
          <div className="bg-[#292929] h-[59.5vw] relative bottom-[20vw] ">
            <button className="relative bottom-[8vw]">
              <Image
                src={book}
                alt="Book Icon"
                className="relative left-[45vw] top-[4.5vw] w-[7.55vw] h-[7.55vw]"
              />
            </button>
            <Categories />
            <Image
              src={graphic2}
              alt="Graphic design"
            />
          </div>
          <div className="bg-[#4A4A4A] h-[26vw] relative bottom-[16.6vw]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
