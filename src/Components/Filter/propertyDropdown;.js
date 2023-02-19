import React, { useState, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../houseContent";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      as="div"
      className="dropdown relative bg-white bg-opacity-50 rounded-md ring-1 ring-violet-300 "
    >
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[13px]">Property Type</div>
          <div className="text-[15px] font-medium leading-tight text-gray-700">
            {property}
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu  bg-white bg-opacity-75">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setProperty(property)}
              key={index}
              className="cursor-pointer hover:text-violet-600 transition hover:font-bold"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
