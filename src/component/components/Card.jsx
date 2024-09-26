import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FaRegHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Card({ data, tranding, index, mediaType }) {
  const ImageUrl = useSelector((state) => state.moviedata.ImageUrl);
  // console.log(data);

  console.log(mediaType)

  if(!data.backdrop_path){
    return null
  }

  return (
    <NavLink to={'/'+mediaType+'/'+data?.id} className="w-full min-w-[230px] max-w-[280px] h-80 overflow-hidden rounded-md relative hover:scale-105 transition-all ">
      <div className="w-full h-full">
        <img
          src={ImageUrl + data.backdrop_path}
          className="w-full h-full object-cover"
        />
      </div>
      {
        tranding ? <div><div className="absolute top-0 w-full h-full bg-gradient-to-b from-neutral-900 to-transparent"></div>
          <div className="absolute top-0 text-white px-1 py-2">
            # <span className="text-2xl">{index + 1} </span>Tranding
          </div> </div>:null
      }
      

      <div className="text-white absolute bottom-0 h-16 p-2 backdrop-blur-lg w-full">
        <h2 className="font-bold text-ellipsis line-clamp-1">
          {data?.title || data?.name}
        </h2>
        <div className="flex justify-between">
          <p className="text-xs">
            {moment(data.release_date).format("MMMM Do YYYY")}
          </p>
          <p className="flex gap-2 items-center">{Number(data.vote_average).toFixed(1)} <FaRegHeart/></p>
        </div>
      </div>
    </NavLink>
  );
}
