import React from "react";

const SortButton = () => {
  return (
    <div className="dropdown dropdown-hover m-3">
      <div tabIndex={0} role="button" className="btn btn-sm m-1">
        Sort by:
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a>Date</a>
        </li>
        <li>
          <a>Time</a>
        </li>
        <li>
          <a>Duration</a>
        </li>
      </ul>
    </div>
  );
};

export default SortButton;
