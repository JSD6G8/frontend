import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formatDuration from "../utils/formatDuration";
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

  const handleEdit = (id) => {
    navigate(`/activities/edit/${id}`);
  };

  return (
    <>
      {/* base card */}
      <div className="mb-2 flex flex-row rounded-l-xl rounded-r-xl shadow-xl max-md:w-full max-sm:w-full md:flex-col">
        {/* barometer color */}
        <div
          id="activities-baro"
          className={`${moodColor} flex w-32 flex-shrink-0 flex-col justify-evenly rounded-l-xl max-sm:w-1/4 md:h-32 md:w-full md:rounded-b-none md:rounded-t-xl`}
        >
          <span
            className="material-symbols-outlined select-none self-center"
            style={{ fontSize: "50px" }}
          >
            {activitySymbol}
          </span>
        </div>
        {/* brief activity info */}
        <div className="flex flex-grow flex-col justify-evenly rounded-r-xl bg-base-100 max-sm:w-12 md:rounded-b-xl md:rounded-t-none md:px-3">
          <div
            className="flex-0 flex flex-row justify-between hover:cursor-pointer"
            onClick={() => handleShowDetails(activities.activityId)}
          >
            <div
              id="summary-description"
              className="mb-2 mt-4 w-44 max-sm:mx-4 max-sm:w-36 md:mb-4 md:flex-grow md:px-2"
            >
              <p className="truncate text-xl font-bold max-sm:text-base">
                {activities.title}
              </p>
              <div className="text-sm font-light md:text-lg">
                <div className="inline">
                  {formatDuration(activities.duration.hour, "hour", "hours")}
                </div>{" "}
                <div className=" inline">
                  {formatDuration(activities.duration.minute, "min", "mins")}
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined mt-2 flex-grow-0 select-none self-center md:mt-8 md:w-10">
              arrow_forward_ios
            </span>
          </div>

          <div className="mb-1 flex flex-col justify-between max-sm:mr-2">
            <div
              id="brief-dateAndTime"
              className="mb-1 flex w-32 select-none justify-evenly self-end md:mx-2 md:w-fit md:self-start"
            >
              <p className="text-xs font-normal md:text-base">
                {activities.date}
              </p>
              <p className="text-xs font-thin italic text-slate-600 md:mx-1 md:text-base">
                at
              </p>
              <p className="text-xs font-normal md:text-base">
                {activities.startTime}
              </p>
            </div>
            <button
              onClick={() => handleEdit(activities.activityId)}
              className="z-10 mx-3 mb-3 flex h-9 w-9 items-center justify-center self-end rounded-full bg-primary hover:bg-[#1357B8]  max-md:hidden"
            >
              <span className="material-symbols-outlined text-white">edit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListedCard;
