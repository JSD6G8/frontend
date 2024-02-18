import React, { useState } from "react";
import {
  TbArrowsSort,
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

const SortButton = ({ selected, setResult }) => {
  const [selectedOrder, setSelectedOrder] = useState(selected);

  function handleClick(value) {
    setSelectedOrder(value);
    setResult(value);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  }

  return (
    <div className="dropdown dropdown-end place-self-center pl-3">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-info btn-sm"
      >
        <TbArrowsSort className="size-5" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-info p-2 text-white shadow"
      >
        <li>
          <button
            onClick={() => {
              handleClick("date-desc");
            }}
          >
            <TbSortAscendingLetters className="size-6" />
            Latest to Oldest
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleClick("date-asc");
            }}
          >
            <TbSortDescendingLetters className="size-6" />
            Oldest to Latest
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortButton;
