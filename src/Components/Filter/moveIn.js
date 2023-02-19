import React, { useContext } from "react";
import { HouseContext } from "../houseContent";
import { RiCalendarTodoLine } from "react-icons/ri";

function MoveIn() {
  const { moving, setMoving } = useContext(HouseContext);

  const handleDateChange = (event) => {
    setMoving(event.target.value);
  };

  return (
    <div className="flex mx-5">
      <RiCalendarTodoLine className="dropdown-icon-primary inline mt-5" />

      <div className="inline">
        <label
          htmlFor="moving"
          className="block text-gray-500 mt-2 text-[13px]"
        >
          When
        </label>
        <input
          type="date"
          id="moving"
          name="moving"
          value={moving}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
}

export default MoveIn;
