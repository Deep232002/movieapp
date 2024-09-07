import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

export default function CardScroll({movieData, heading, tranding , media_type}) {
  

  const containRef = useRef();

  const handleLeft = () => {
    containRef.current.scrollLeft -= 300;
  };

  const handleRight = () => {
    containRef.current.scrollLeft += 300;
  };

  return (
    <>
      <div className="container w-full h-full mx-auto px-3 py-6">
        <h2 className="font-bold text-xl lg:text-3xl mb-2">{heading}</h2>
        <div className=" relative">
          <div
            ref={containRef}
            className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-4 mx-auto overflow-hidden overflow-x-scroll relative  scroll-smooth transition-all scrollbar-hide scroll-bar"
          >
            {movieData?.map((data, index) => {
              return (
                <>
                  <Card data={data} tranding={tranding} index={index} key={index+media_type+index} mediaType={media_type}/>
                </>
              );
            })}
          </div>
          <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between p-4 ">
            <button
              className="bg-white z-10 p-1 text-xl text-black rounded-full"
              onClick={handleLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="bg-white z-10 p-1 text-xl text-black rounded-full"
              onClick={handleRight}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
