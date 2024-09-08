import React, { useState, useEffect } from 'react'
import BannerHome from '../components/BannerHome'
import CardScroll from '../components/CardScroll';
import Fetchdata from '../content/Fetchdata';
import { useSelector } from 'react-redux';

export default function Home() {
  const movieData = useSelector((state) => state.moviedata.bannerData);
  const {data: Nowplaying}=Fetchdata('/movie/now_playing')
  const {data: populer}=Fetchdata('/movie/popular')
  const {data: TvSeries}=Fetchdata('/tv/top_rated')
  const {data: OnTheAirData}=Fetchdata('/tv/on_the_air')


 
  console.log(movieData)
 
  return (
    <div>
     <BannerHome/>
     <CardScroll movieData={movieData} heading="Tranding" tranding={true} mediaType={movieData?.media_type}/>
     <CardScroll movieData={Nowplaying} heading="Now Playing" tranding={false} mediaType='movie'/>
     <CardScroll movieData={populer} heading="Populer Movies" tranding={false} mediaType='movie'/>
     <CardScroll movieData={TvSeries} heading="Populer TV Show" tranding={false} mediaType='tv'/>
     <CardScroll movieData={OnTheAirData} heading="On The Air" tranding={false} mediaType='tv'/>
     
    </div>
  )
}
