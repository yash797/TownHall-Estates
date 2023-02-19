import React, { useContext } from "react";

import { HouseContext } from "./houseContent";

import House1 from "./card";

import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading, search } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-600 mt-48">
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className="mb-20 ">
      <div className="container21">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 mt-32 md:-lg-8">
          {search.query === ""
            ? houses.map((house, index) => <House1 house={house} />)
            : !search.list.length
            ? "Your query did not return any results"
            : search.list.map((house, index) => <House1 house={house} />)}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
