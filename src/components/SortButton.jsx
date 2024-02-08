import React from "react";

const SortButton = () => {
  return (
    <div className="dropdown dropdown-end mr-3 mt-1 md:mr-0">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-info btn-sm m-1 "
      >
        Sort by
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-info p-2 text-white shadow"
      >
        <li>
          <a>Latest to Oldest</a>
        </li>
        <li>
          <a>Oldest to Latest</a>
        </li>
      </ul>
    </div>
  );
};

export default SortButton;
