 import React from 'react'
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

 import logo from '../../Assets/house.png'
 


 export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const location = useLocation();

    const handleClick = () => {
      setClicked(!clicked);
    };

    const navItems = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Rent",
        link: "/",
      },
      {
        title: "Buy",
        link: "/",
      },
      {
        title: "Resources",
        link: "/",
      },
    ];

    return (
      <div className="fixed w-full bg-gray-100 bg-opacity-60 z-10 top-0 py-1 backdrop-filter backdrop-blur px-10 -ml-12 md:-ml-32 md:px-32 flex flex-wrap xl:flex-nowrap items-center justify-between ">
        <NavLink to="/">
          <img
            src={logo}
            className="max-h-12 sm:max-h-16 md:max-h-12 xl:max-h-20 transition duration-500 ease-in-out transform hover:scale-105"
            alt="Logo"
          />
        </NavLink>
        <button
          className="text-violet-500 inline-flex p-3 hover:bg-blue-900 rounded h-10 w-10 justify-center align-middle xl:hidden"
          onClick={handleClick} type="button"
        >
          <i
            className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}
          ></i>
        </button>

        <div
          className={
            clicked
              ? "transition ease-in-out duration-500 transform w-full xl:w-auto xl:flex"
              : "transition ease-in-out duration-500 transform hidden w-full xl:w-auto xl:flex"
          }
        >
          <div className="flex flex-col xl:flex xl:flex-row">
            {navItems.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.link}
                  onClick={handleClick}
                  className={
                    location.pathname === item.link
                      ? `text-violet-900 font-primary font-medium text-lg px-5 text-center mt-6 xl:my-auto hover:text-blue-400`
                      : `text-white font-primary font-medium text-lg px-5 text-center transition duration-500 ease-in-out hover:text-blue-500 mt-6 xl:my-auto`
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}

            {/* <NavLink to="/contact" onClick={handleClick}>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-6 mb-4 xl:mt-0 xl:mb-0">
                Contact Me{" "}
                <span className="font-thin" role="img" aria-label="emoji">
                  ☎️
                </span>
              </button>
            </NavLink> */}
          </div>
        </div>
      </div>
    );
 }
 
 
 
