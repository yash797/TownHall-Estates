import React, { useContext } from "react";
import { HouseContext } from "../houseContent";
import { RiCalendarTodoLine } from "react-icons/ri";

function MoveIn() {
  const { moving, setMoving } = useContext(HouseContext);

  const handleDateChange = (event) => {
    setMoving(event.target.value);
  };

  return (
    <div className="dropdown-btn flex w-full text-left  bg-white bg-opacity-50 rounded-md ring-1 ring-violet-300 ">
      <RiCalendarTodoLine className="dropdown-icon-primary" />

      <div className="inline">
        <label htmlFor="moving" className="block text-gray-500 text-[13px]">
          When
        </label>
        <input
          type="date"
          id="moving"
          name="moving"
          value={moving}
          onChange={handleDateChange}
          className=" rounded-md text-sm "
        />
      </div>
    </div>
  );
}

export default MoveIn;
