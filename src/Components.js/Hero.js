import React, { useContext} from "react";

import Search from "./Search";

import { HouseContext } from "./HouseContext";

const Hero = () => {
  const { search, handleSearch } = useContext(HouseContext);

  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 mt-8">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-lg lg:text-xl font-medium leading-none mb-6 text-violet-500">
            Welcome To{" "}
          </h1>
          <h1 className="text-violet-800 break-words font-semibold text-5xl -mt-3">
            TownHall Estates
          </h1>

          <p className="max-w-[480px] mb-8 text-blue-900 mt-4 ">
            We are the keys to your home 😊
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-center lg:justify-end w-full ">
        <input
          type="text"
          placeholder="Search by Name"
          value={search.query}
          className=" border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none ring-2 ring-violet-300 text-violet-700"
          onChange={handleSearch}
        />
      </div>
      <Search />
    </section>
  );
};

export default Hero;
