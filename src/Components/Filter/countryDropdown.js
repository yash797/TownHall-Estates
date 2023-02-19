import React, { useState, useContext } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "../houseContent";

const StateDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left  bg-white bg-opacity-50 rounded-md ring-1 ring-violet-300 "
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[13px]">Location</div>

          <div className="text-[15px] font-medium leading-tight text-gray-700 ">
            {country}
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu  bg-white bg-opacity-75">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setCountry(country)}
              key={index}
              className="cursor-pointer hover:text-violet-600 transition hover:font-bold"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default StateDropdown;
