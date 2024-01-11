import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function ListedCard() {
  return (
    <>
      {/* base card */}
      <div className="flex flex-row h-1/4 m-3 shadow-xl rounded-l-xl rounded-r-xl">
        {/* TODO bg as a variable? */}
        {/* TODO emoji as a variable */}
        <div id="activities-baro" className="bg-power w-32 rounded-l-xl">
          <div className="text-7xl">🏊🏼</div>
        </div>
        {/* activity info small */}
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
