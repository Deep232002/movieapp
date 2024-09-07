
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function Movie() {
  const [PageNo, SetpageNo] = useState(1);
  const [data, Setdata] = useState([]);
  const [totalPage, SettotalPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false); // Track if fetching is in progress
  const params2 = useParams();
  // console.log(params2)
  const location = useLocation();
  const params=location.pathname.split('/')[1]

  // Fetch the data
  const datafetch = async () => {
    if (isFetching) return; // Prevent duplicate requests
    setIsFetching(true);

    try {
      const response = await axios.get(`/discover/${params}`, {
        params: { page: PageNo },
      });

      Setdata((prev) => [...prev, ...response.data.results]);
      SettotalPage(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }

    setIsFetching(false); // Set fetching to false when data is fetched
  };

  const handlescroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && // Trigger 500px before hitting bottom
      PageNo < totalPage &&
      !isFetching // Ensure that it's not already fetching
    ) {
      SetpageNo((prev) => prev + 1); // Increase page number
    }
  };

  // Fetch data on page change
  useEffect(() => {
    if (PageNo <= totalPage) {
      datafetch();
    }
  }, [PageNo]);

  // Fetch data when the route changes
  useEffect(() => {
    Setdata([]); // Clear previous data on route change
    SetpageNo(1); // Reset page number on route change
    datafetch(); // Fetch new data
  }, [params]);

  // Add scroll event listener for infinite scroll
  useEffect(() => {
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll); // Cleanup
    };
  }, [PageNo, totalPage, isFetching]); // Re-run effect when PageNo or totalPage changes

  return (
    <div className='pt-16'>
      <div className='container mx-auto px-6'>
        <h1 className='font-bold text-xl lg:text-2xl my-3'>
          Top {params} Shows
        </h1>

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start'>
          {data.map((item, index) => (
            <Card data={item} key={index + 'deepak'} mediaType={params} />
          ))}
        </div>

        {/* Loading Indicator */}
        {isFetching && PageNo < totalPage && (
          <div className='text-center py-5'>
            <span>Loading more...</span>
          </div>
        )}
        {/* End of Results Message */}
        {!isFetching && PageNo === totalPage && (
          <div className='text-center py-5'>
            <span>You've reached the end!</span>
          </div>
        )}
      </div>
    </div>
  );
}
