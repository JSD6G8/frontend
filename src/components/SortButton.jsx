import React from "react";

const SortButton = () => {
  return (
    <div className="dropdown dropdown-end mr-3 mt-1 md:mr-0">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-active btn-sm m-1 hover:btn-outline hover:bg-zinc-600 hover:text-white"
      >
        Sort by
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
