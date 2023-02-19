import React from "react";

import Poster from "../Components/hero";
import HouseList from "../Components/cardList";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Poster />
      <HouseList />
    </div>
  );
};

export default Home;
