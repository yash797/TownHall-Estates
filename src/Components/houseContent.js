import React, { createContext, useState, useEffect } from "react";
import { RenthouseData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [moving, setMoving] = useState("");
  const [houses, setHouses] = useState(RenthouseData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, [houses]);

  const handleSearch = (e) => {
    const allProperties = houses.filter((house) => {
      if (e.target.value === "") return houses;
      return house.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearch({
      query: e.target.value,
      list: allProperties,
    });
  };

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = RenthouseData.filter((house) => {
      const housePrice = parseInt(house.price);
      let time = false;
      if (moving) {
        const d1 = new Date(house.movingDate);
        const d2 = new Date(moving);
        time = d1.getTime() <= d2.getTime();
      } else {
        time = true;
      }

      // console.log(house.country, country, house.country === country || isDefault(country));
      // console.log(time);
      // console.log(house.type, property, house.type === property || isDefault(property));
      // console.log(housePrice, minPrice ,maxPrice,(housePrice >= minPrice && housePrice <= maxPrice) || isDefault(price) );
      if (
        (house.country === country || isDefault(country)) &&
        time &&
        (house.type === property || isDefault(property)) &&
        ((housePrice >= minPrice && housePrice <= maxPrice) || isDefault(price))
      ) {
        return true;
      }
      return false;
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
        moving,
        setMoving,
        search,
        setSearch,
        handleSearch,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
