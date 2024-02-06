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

  const shortenedDetail = (original, maxChars) => {
    const shortened =
      original.length <= maxChars
        ? original
        : original.slice(0, maxChars) + "...";

    return <h1 className="text-lg font-bold">{shortened}</h1>;
  };

  return (
    <>
      {/* base card */}
      <div className="m-3 flex h-1/4 flex-row rounded-l-xl rounded-r-xl shadow-xl md:mt-4 md:h-max md:w-60 md:flex-col">
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} flex w-32 flex-col justify-evenly rounded-l-xl md:h-32 md:w-full md:rounded-b-none md:rounded-t-xl`}
        >
          <span
            className="material-symbols-outlined self-center"
            style={{ fontSize: "65px" }}
          >
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        <div className="flex flex-grow flex-col justify-evenly rounded-r-xl bg-base-100  md:rounded-b-xl md:rounded-t-none">
          <div
            id="summary-description"
            className="mx-4 mb-2 mt-4 md:mx-3 md:mb-1 md:mt-4"
          >
            <div>{shortenedDetail(activities.title, 16)}</div>
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
              className="mb-1 flex w-32 justify-evenly self-end md:mx-2 md:mt-2 md:self-start"
            >
              <p className="text-xs font-normal">{activities.date}</p>
              <p className="text-xs font-thin italic text-slate-600">at</p>
              <p className="text-xs font-normal">{activities.startTime}</p>
            </div>
            <div className="mx-3 mb-3 flex h-9 w-9 items-center justify-center self-end rounded-full bg-slate-300 max-md:hidden">
              <span className="material-symbols-outlined text-black">edit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
