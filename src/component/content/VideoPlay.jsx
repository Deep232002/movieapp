import React, { useRef } from 'react';
import { IoClose, IoExpand } from "react-icons/io5";
import Fetchdata from './Fetchdata';

const VideoPlay = ({ data, close, media_type }) => {
  const { SimpleData: videoData } = Fetchdata(`/${media_type}/${data?.id}/videos`);
  const videoContainerRef = useRef(null); // Reference to the video container
  

  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div 
        ref={videoContainerRef} 
        className='bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'
      >
        {/* Close Button */}
        <button onClick={close} className='absolute top-5 right-5 text-4xl z-50 text-white'>
          <IoClose />
        </button>
        
        
        {/* Iframe Video */}
        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className='w-full h-full'
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Player"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
