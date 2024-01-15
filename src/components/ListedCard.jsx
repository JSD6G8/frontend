import React, { useEffect, useState } from "react";
import "./ListedCard.css";

// ?? recieve props from activity database
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
      <div className="m-3 flex h-1/4 flex-row rounded-l-xl rounded-r-xl shadow-xl lg:h-60 lg:w-60 lg:flex-col">
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} flex w-32 flex-col justify-evenly rounded-l-xl lg:h-60 lg:w-full lg:rounded-b-none lg:rounded-t-xl`}
        >
          <span
            className="material-symbols-outlined self-center"
            style={{ fontSize: "65px" }}
          >
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        <div className=" flex flex-grow flex-col justify-evenly rounded-r-xl bg-base-100 lg:mt-2 lg:h-64 lg:rounded-b-xl">
          <div
            id="summary-description"
            className="mx-4 mb-2 mt-4 lg:mb-0 lg:mt-1"
          >
            <div>
              <h1 className="text-xl font-extrabold">{activities.title}</h1>
            </div>
            <div className="text-sm font-light">
              <div className="inline">
                {activities.duration.hour || ""}{" "}
                {!activities.duration.hour
                  ? ""
                  : activities.duration.hour === 1
                    ? "hour "
                    : "hours "}
              </div>
              <div className=" inline">
                {activities.duration.minute || ""}{" "}
                {!activities.duration.minute
                  ? ""
                  : activities.duration.minute === 1
                    ? "min"
                    : "mins"}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div
              id="brief-dateAndTime"
              className="mb-1 flex w-32 justify-evenly self-end lg:mx-2 lg:mt-2 lg:self-start"
            >
              <p className="text-xs font-normal">{activities.date}</p>
              <p className="text-xs font-thin italic text-slate-600">at</p>
              <p className="text-xs font-normal">{activities.startTime}</p>
            </div>
            <div className="mx-3 mb-3 mt-1 flex self-end max-lg:hidden">
              <button className="material-symbols-outlined btn btn-sm mx-1 bg-yellow-500 text-white">
                edit
              </button>
              <button className="material-symbols-outlined btn btn-sm bg-red-700 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
