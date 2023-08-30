"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgMain4 from "../../../public/assets/cover4.jpg";
import bgMain3 from "../../../public/assets/cover3.jpg";
import bgMain2 from "../../../public/assets/cover2.jpg";
import bgMain from "../../../public/assets/cover1.svg";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      image: bgMain4,
      alt: "Discover New Collection",
    },
    {
      image: bgMain3,
      alt: "Shop with Confidence",
    },
    {
      image: bgMain2,
      alt: "Shop with Confidence",
    },
    {
      image: bgMain,
      alt: "Shop with Confidence",
    },
  ];

  return (
    <div
      className="carousel bg-white cursor-pointer relative"
      // style={{
      //   width: "988px",
      //   height: "344px",
      //   justifyContent: "center",
      //   flexDirection: "row",
      // }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="carousel-slide">
              <Image
                src={slide.image}
                // width={988}
                // height={344}
                // objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className="carousel-dots w-[10vw] bottom-[25vw] text-lg z-50 text-white">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              currentSlide === index ? "active" : ""
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
