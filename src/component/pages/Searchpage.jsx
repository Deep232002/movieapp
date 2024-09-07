import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Searchpage() {
  const [PageNo, SetpageNo] = useState(1);
  const [data, Setdata] = useState([]);
  const [totalPage, SettotalPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [head, Sethed] = useState();
  const location = useLocation(); // Access current route
  const navigate= useNavigate()

  // Helper function to extract the search query from the URL

  const getSearchQuery = () => {
    const params = location.search.slice(3);
    Sethed(params.replace(/%20/g, " "));
    return params || ""; // Get the 'q' parameter (or default to an empty string)
  };

  // Fetch the data
  const datafetch = async () => {
    if (isFetching || !getSearchQuery()) return; // Prevent duplicate requests or empty searches
    setIsFetching(true);

    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: getSearchQuery(), // Include search query
          page: PageNo,
        },
      });

      Setdata((prev) => [...prev, ...response.data.results]);
      SettotalPage(response.data.total_pages);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  // Infinite Scroll Handler
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && // Trigger 500px before hitting the bottom
      PageNo < totalPage &&
      !isFetching // Ensure that it's not already fetching
    ) {
      SetpageNo((prev) => prev + 1); // Increase page number
    }
  };

  // Fetch data when the page number or search query changes
  useEffect(() => {
    if (PageNo <= totalPage) {
      datafetch();
    }
  }, [PageNo]);

  // Fetch new data when the search query changes
  useEffect(() => {
    Setdata([]); // Clear previous data on search change
    SetpageNo(1); // Reset page number on new search
    datafetch();
  }, [location.search]);

  // Add scroll event listener for infinite scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [PageNo, totalPage, isFetching]);

  return (
    <div className="pt-16">
      <div className=" w-full sticky top-[79px] z-10  py-1 mb-5 lg:hidden">
        <input type="text" 
            placeholder="Search here..."
            onChange={(e)=>navigate(`/search?q=${e.target.value}`)}
            className="px-3 py-2 w-full text-neutral-900 text-lg rounded-full"
        />
      </div>
        <div className="container mx-auto px-6">
        <h1 className="font-bold text-xl lg:text-2xl my-3">
          Top Search Results for "{head}"
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start">
          {data.map((item, index) => (
            <Card data={item} key={index + "search"} mediaType={item.media_type}/>
          ))}
        </div>

        {/* Loading Indicator */}
        {isFetching && PageNo < totalPage && (
          <div className="text-center py-5">
            <span>Loading more...</span>
          </div>
        )}
        {/* End of Results Message */}
        {!isFetching && PageNo === totalPage && (
          <div className="text-center py-5">
            <span>You've reached the end!</span>
          </div>
        )}
      </div>
    </div>
  );
}
