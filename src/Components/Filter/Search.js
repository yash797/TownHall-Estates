import React, { useContext } from "react";

import MoveIn from "./moveIn";

import StateDropDown from "./countryDropdown";
import PropertyDropdown from "./propertyDropdown;";
import PriceRangeDropdown from "./priceDropdown";

import { HouseContext } from "../houseContent";

import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] bg-white bg-opacity-60 py-8 mt-10  max-w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1  lg:backdrop-blur rounded-lg">
      <StateDropDown />
      <div className="hidden lg:block w-[1px] h-[60px] bg-gray-500"></div>
      <MoveIn />
      <div className="hidden lg:block w-[1px] h-[60px] bg-gray-500"></div>

      <PropertyDropdown />
      <div className="hidden lg:block w-[1px] h-[60px] bg-gray-500"></div>

      <PriceRangeDropdown />
      <div className="hidden lg:block w-[1px] h-[60px] bg-gray-500"></div>

      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-violet-700 hover:bg-violet-800 transition px-5 lg:max-w-[140px] h-14 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line className="mr-1" />
        Search
      </button>
    </div>
  );
};

export default Search;
