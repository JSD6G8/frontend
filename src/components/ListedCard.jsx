import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListedCard.css";

// ?? recieve props from activity database
function ListedCard({ activities }) {
  const [moodColor, setMoodColor] = useState();
  const [activitySymbol, setActivitySymbol] = useState();

  const navigate = useNavigate();
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

  const handleShowDetails = (id) => {
    navigate(`/activities/${id}`);
  };

  return (
    <>
      {/* base card */}
      <div
        className="mb-2 flex flex-row rounded-l-xl rounded-r-xl shadow-xl max-md:w-[600px] max-sm:w-[350px] md:h-72 md:w-60 md:flex-col"
        onClick={() => handleShowDetails(activities.activityId)}
      >
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} flex w-32 flex-shrink-0 flex-col justify-evenly rounded-l-xl max-sm:w-1/4 md:h-32 md:w-full md:rounded-b-none md:rounded-t-xl`}
        >
          <span
            className="material-symbols-outlined self-center"
            style={{ fontSize: "55px" }}
          >
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        <div className="flex flex-grow flex-col justify-evenly rounded-r-xl bg-base-100 max-sm:w-12 md:rounded-b-xl md:rounded-t-none">
          <div className="flex-0 flex flex-row justify-between">
            <div
              id="summary-description"
              className="mx-4 mb-2 mt-4 w-48 max-sm:w-36 md:mx-3 md:mb-1 md:mt-4 md:flex-grow"
            >
              <p className="truncate text-lg font-bold max-sm:text-base">
                {activities.title}
              </p>
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
            <span className="material-symbols-outlined mt-2 w-12 flex-grow-0 self-center md:mt-8">
              arrow_forward_ios
            </span>
          </div>

          <div className="mb-1 mr-2 flex flex-col justify-between">
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
