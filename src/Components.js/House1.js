import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
  

// function PropertyCard({ property }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleLikeClick = () => {
//     setIsLiked(!isLiked);
//   };

//   const handleFavoriteClick = () => {
//     setIsFavorite(!isFavorite);
//   };
const House1 = ({ house }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };
  return (
    <div class="p-2">
      <div class="rounded overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img class="w-full h-56" src={house.image} alt="Mountain" />
        <div class="px-6 py-4">
          <div className="">
            <div className="text-lg font-black text-violet-600 mb-2 inline-block ">
              ${house.price}{" "}
              <span className="text-xs text-gray-400">/month</span>
            </div>
            <div className=" text-right justify-end -mt-8 ">
              <button onClick={handleFavoriteClick} className="">
                <FaHeart color={isFavorite ? "#c065f2" : "#d7d2dd"} size={25} />
              </button>
            </div>
          </div>
          <div class="font-bold text-xl text-[#431b73]">{house.name}</div>
          <div class="font-semibold text-sm mb-2 text-[#431b73]">
            Move By: <span className="text-violet-600">{house.movingDate}</span>
          </div>

          {/* <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
          <div className="text-md font-semibold max-w-[260px] text-gray-500">
            {house.address}
            <br></br>
            {house.location}, {house.country}
          </div>

          <div className="hidden lg:block w-[300px] h-[2px] bg-gray-300 mt-2"></div>

          <div className="flex gap-x-4  text-center justify-items-stretch my-4">
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[15px] rounded-full  text-violet-500">
                <BiBed />
              </div>
              <div className="text-sm">{house.bedrooms} Bed</div>
            </div>
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[15px] rounded-full  text-violet-500">
                <BiBath />
              </div>
              <div className="text-sm">{house.bathrooms} Bathroom</div>
            </div>
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[15px] rounded-full text-violet-500">
                <BiArea />
              </div>
              <div className="text-sm">{house.surface}</div>
            </div>
          </div>
          {/* <div className="text-lg font-semibold text-violet-600 mb-4">
            $ {house.price} <span className="text-xs text-gray-400">/month</span>
          </div> */}
        </div>

        {/* <div class="grid grid-cols-3 gap-x-0 pt-4 pb-2 text-center">
          <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {house.location}
          </div>
          <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {house.country}
          </div>
          <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {house.type}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default House1;
