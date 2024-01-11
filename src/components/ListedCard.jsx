import React, { useEffect, useState } from "react";
import Layout from "../Layout";

// TODO Add another card styling for lg or md screen size
// TODO Add possible props and variable for use in main page
// TODO baro-bg as variable + conditional
// TODO activity symbol as variable + conditional (text inside <span>)
// TODO How to use daisyUI accordion/collapse to show main card??

function ListedCard() {
  return (
    <>
      {/* base card */}
      <div className="flex flex-row h-1/4 m-3 shadow-xl rounded-l-xl rounded-r-xl">
        {/* barometer color */}
        <div
          id="activities-baro"
          className="bg-power w-32 rounded-l-xl flex flex-col justify-evenly"
        >
          {/* TODO Resize logo with CSS */}
          <span className="material-symbols-outlined self-center">sprint</span>
        </div>
        {/* brief activity info */}
        <div className=" bg-base-100 flex-grow flex flex-col justify-evenly rounded-r-xl">
          <div id="summary-description" className="mt-4 mb-2 mx-4">
            <div>
              <h1 className="font-extrabold text-xl">Morning Run</h1>
            </div>
            <div>
              <p className="font-light text-sm">1 Hour 15 mins</p>
            </div>
          </div>
          <div
            id="brief-dateAndTime"
            className="flex justify-evenly w-32 mb-1 self-end"
          >
            <p className="font-thin text-xs">25/1/2024</p>
            <p className="font-extralight text-slate-400 text-xs italic">at</p>
            <p className="font-thin text-xs">11:25</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
