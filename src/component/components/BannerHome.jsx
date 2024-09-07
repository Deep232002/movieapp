import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BannerHome() {
  const movieData = useSelector((state) => state.moviedata.bannerData);
  const ImageUrl = useSelector((state) => state.moviedata.ImageUrl);
  const [bannerImage, setBannerImage] = useState(0); // Start at 0

  // Handle moving to the previous image
  const handleRight = () => {
    if (bannerImage < movieData.length - 1) {
      setBannerImage((preve) => preve + 1);
    }
  };

  // Handle moving to the next image
  const handleLeft = () => {
    if (bannerImage > 0) {
      setBannerImage((preve) => preve - 1);
    }
  };
  // console.loh()

  useEffect(()=>{
    const interval = setInterval(()=>{
        if(bannerImage < movieData.length - 1){
            handleRight()
        }else{
          setBannerImage(0)
        }
    },5000)

    return ()=>clearInterval(interval)
},[movieData,ImageUrl,bannerImage])
  return (
    <section className="w-full h-full">
    
        <div
          className="flex min-h-full max-h-[95vh] overflow-hidden"
         
        >
          {movieData.map((data, index) => {
            return(
            <div
              key={data.id}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-transform duration-500"
              style={{ transform: `translateX(-${bannerImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={ImageUrl + data.backdrop_path}
                  alt={"Movie Image"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 w-full h-full hidden items-center justify-between p-4 lg:group-hover:flex">
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
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container absolute bottom-0 max-w-md px-4 py-5 text-white">
                <h1 className="font-bold text-2xl text-white lg:text-4xl">
                  {data?.title || data?.name}
                </h1>
                <p className="text-ellipsis line-clamp-3 ">{data.overview}</p>
                <div className="flex items-center gap-4 mt-2">
                  <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                  <span>|</span>
                  <p>View : {Number(data.popularity).toFixed(0)}</p>
                </div>
                <button className="px-3 py-2 text-bold bg-white text-black mt-5 rounded hover:bg-gradient-to-l from-orange-500 to-red-700 transition-all hover:text-white hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
)})}
        </div>
     
    </section>
  );
}
