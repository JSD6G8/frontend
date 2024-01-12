import React, { useEffect, useState } from "react";
import "./ListedCard.css";

// TODO Add another card styling for lg or md screen size
// TODO baro-bg as variable + conditional
// TODO How to use daisyUI accordion/collapse to show main card??
// --------------------------------------------------//

// ?? recieve props from activity database
// function ListedCard({ activities }) {
function ListedCard({ activities }) {
  const [moodColor, setMoodColor] = useState("3");
  const [activitySymbol, setActivitySymbol] = useState("Swimming");

  // ?? render card once with conditional for color and symbol
  useEffect(() => {
    // function expression
    const eachColor = () => {
      // switch (activities.barometer) {
      switch (moodColor) {
        case "1":
          setMoodColor("bg-info");
          break;
        case "2":
          setMoodColor("bg-success");
          break;
        case "3":
          setMoodColor("bg-warning");
          break;
        case "4":
          setMoodColor("bg-error");
          break;
        case "5":
          setMoodColor("bg-power");
          break;
      }
    };
    const eachSymbol = () => {
      // switch (activities.type) {
      switch (activitySymbol) {
        case "Running":
          setActivitySymbol("sprint");
          break;
        case "Cycling":
          setActivitySymbol("directions_bike");
          break;
        case "Swimming":
          setActivitySymbol("pool");
          break;
        case "Walking":
          setActivitySymbol("directions_walk");
          break;
        case "Hiking":
          setActivitySymbol("hiking");
          break;
        case "Other":
          setActivitySymbol("timer");
          break;
      }
    };
    // call function
    eachColor();
    eachSymbol();
  }, []);

  return (
    <>
      {/* base card */}
      <div className="flex flex-row h-1/4 m-3 shadow-xl rounded-l-xl rounded-r-xl">
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} w-32 rounded-l-xl flex flex-col justify-evenly`}
        >
          <span className="material-symbols-outlined self-center">
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        {/* TODO Change into props variable */}
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
