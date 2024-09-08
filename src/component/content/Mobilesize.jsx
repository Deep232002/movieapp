import React from 'react';
import { IoSearch, IoHome } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom';

const navigations = [
    {
        label: 'Home',
        href: '/',
        icon: <IoHome />
    },
    {
        label: 'Tv',
        href: '/tv',
        icon: <FiTv />
    },
    {
        label: 'Movie',
        href: '/movie',
        icon: <BiSolidCameraMovie />
    },
    {
        label: 'Search',
        href: '/search',
        icon: <IoSearch />
    }
];

function Mobilesize() {
  return (
    <div className='lg:hidden px-2 py-3 h-17 bg-black bg-opacity-100 fixed bottom-0 w-full flex justify-around'>

      {navigations.map((item, index) => (
        <NavLink 
          to={item.href} 
          key={index} 
          className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-neutral-700' : ''}`}
        >
          <div className='text-3xl'>
            {item.icon}
          </div>
          <p>{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Mobilesize;
