import React from "react";
import Card from "./Card";
// import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

export default function CardScroll({movieData, heading, tranding , mediaType='movie'}) {
  
console.log(mediaType)
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
            className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-4 mx-auto overflow-hidden overflow-x-scroll relative  scroll-smooth transition-all scrollbar-hide scroll-bar "
          >
            {movieData?.map((data, index) => {
              return (
                <>
                  <Card data={data} tranding={tranding} index={index} key={index+'deepak'+data.id} mediaType={!mediaType?data.media_type:mediaType}/>
                </>
              );
            })}
          </div>
          {/* <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between p-4 "> */}
          
            <button
              className="flex items-center justify-center absolute top-0 bottom-0 my-auto mx-0 w-10 h-10 bg-white  p-1 text-xl text-black rounded-full hidden lg:flex"
              onClick={handleLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="flex items-center justify-center absolute top-0 bottom-0 right-0 my-auto  w-10 h-10 bg-white  p-1 text-xl text-black rounded-full hidden lg:flex"
              onClick={handleRight}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
