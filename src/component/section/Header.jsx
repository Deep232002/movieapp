import React, { useState, useEffect } from "react";
import logo from "../../assets/imglogo.jpg";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import user from "../../assets/user.jpg";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchHere, setSearchHere] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchHere) {
      navigate(`/search?q=${searchHere}`);
    }
  }, [searchHere]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 z-50 p-5 bg-black bg-opacity-80 flex items-center w-full">
      <NavLink to="/">
        <img src={logo} alt="img" width={100} />
      </NavLink>
      <nav className="hidden lg:flex items-center gap-1 ml-5 text-neutral-50 w-full">
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            `hover:text-neutral-200 ${isActive ? "text-neutral-200" : ""}`
          }
        >
          TV Show
        </NavLink>
        <NavLink
          to="/movie"
          className={({ isActive }) =>
            `hover:text-neutral-200 ${isActive ? "text-neutral-200" : ""}`
          }
        >
          Movies
        </NavLink>
      </nav>
      <div className="ml-auto flex items-center gap-7">
        <form className="flex items-center gap-4 text-white" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search here..."
            className="px-2 py-1 bg-transparent outline-none border-none hidden lg:block"
            onChange={(e) => setSearchHere(e.target.value)}
          />
          <button className="text-white text-2xl">
            <IoSearch />
          </button>
        </form>
        <div className="w-8 h-8 rounded-full overflow-hidden active:scale-50 transition-all">
          <img src={user} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
