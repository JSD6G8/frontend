import React, { useEffect, useState } from "react";
import "./ListedCard.css";

// TODO Add another card styling for lg or md screen size

// --------------------------------------------------//

// ?? recieve props from activity database
// function ListedCard({ activities }) {
function ListedCard({ activities }) {
  const [moodColor, setMoodColor] = useState();
  const [activitySymbol, setActivitySymbol] = useState();

  // ?? render card once with conditional for color and symbol
  useEffect(() => {
    const eachColor = () => {
      switch (activities.barometer) {
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
      switch (activities.type) {
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
      <div className="flex flex-row h-1/4 m-3 shadow-xl rounded-l-xl rounded-r-xl lg:h-60 lg:flex-col lg:w-60">
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} w-32 rounded-l-xl flex flex-col justify-evenly lg:w-full lg:h-60 lg:rounded-t-xl lg:rounded-b-none`}
        >
          <span
            className="material-symbols-outlined self-center"
            style={{ fontSize: "65px" }}
          >
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        {/* TODO when finish: change into props variable */}
        <div className=" bg-base-100 flex-grow flex flex-col justify-evenly rounded-r-xl lg:h-64 lg:rounded-b-xl">
          <div
            id="summary-description"
            className="mt-4 mb-2 mx-4 lg:mt-1 lg:mb-0"
          >
            <div>
              <h1 className="font-extrabold text-xl">{activities.title}</h1>
            </div>
            <div>
              <p className="font-light text-sm">
                {activities.duration.hour} Hour {activities.duration.minute}{" "}
                Minute
              </p>
            </div>
          </div>
          <div
            id="brief-dateAndTime"
            className="flex justify-evenly w-32 mb-1 self-end lg:self-start lg:mx-2"
          >
            <p className="font-normal text-xs">{activities.date}</p>
            <p className="font-thin text-slate-600 text-xs italic">at</p>
            <p className="font-normal text-xs">{activities.startTime}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
