import React, { useEffect, useState } from "react";

function ListedCard() {
  return (
    <>
      {/* base card */}
      <div className="flex flex-row h-32 m-3 shadow-xl rounded-l-xl rounded-r-xl">
        {/* TODO bg as a variable? */}
        {/* TODO emofi as a variable */}
        <div className="bg-power w-32 rounded-l-xl">
          <div className="text-7xl">🏊🏼</div>
        </div>
        {/* activity info small */}
        <div className=" bg-base-100 flex-grow flex flex-col justify-evenly rounded-r-xl">
          <div className="bg-error mt-4 mx-4">
            <div>
              <h1 className="font-extrabold text-2xl">Morning Run</h1>
            </div>
            <div>
              <p className="font-thin">1 Hour 15 mins</p>
            </div>
          </div>
          <div className="flex justify-around w-32 bg-fuchsia-300 mx-2 self-end">
            <p className="font-light text-sm">25/1/2024</p>
            <p className="font-thin text-sm">at</p>
            <p className="font-light text-sm">11:25</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
