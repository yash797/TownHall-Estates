import React, { useState, useContext } from "react";

import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "../houseContent";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "0 - 1000",
    },

    {
      value: "1000 - 2000",
    },

    {
      value: "2000 - 3000",
    },

    {
      value: "3000 - 4000",
    },

    {
      value: "4000 - 5000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[13px]">Price Range (in $)</div>

          <div className="text-[15px] font-medium leading-tight text-left text-gray-700">
            ${price}
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu ">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setPrice(price.value)}
              key={index}
              className="cursor-pointer hover:text-violet-700 transition hover:bg-gray-100 "
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
