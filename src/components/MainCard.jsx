import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function MainCard(props) {
  const [moodColor, setMoodColor] = useState("5");
  const [activitySymbol, setActivitySymbol] = useState("Walking");
  const [activityDate, setActivityDate] = useState("15-01-2024");
  // const [startTime, setStartTime] = useState("19.05");
  // const [endTime, setEndTime] = useState("19.45");
  const {startTime,endTime} = props;

  // ?? render card once with conditional for color and symbol
  useEffect(() => {
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
    <main
      className={`${moodColor} m-3 shadow-2xl rounded-2xl flex flex-col p-4 gap-3`}
    >
      <section className="flex justify-between border-b-2 border-slate-300 rounded-t-lg pb-2">
        <article className="flex">
          <div
            className="bg-slate-100 w-10 h-10 rounded-full  flex flex-col justify-evenly drop-shadow-2xl"
          >
            <span className="material-symbols-outlined self-center">
              sprint
            </span>
          </div>
          <h1 className="text-[#ffffff] font-extrabold text-xl  mx-3 self-center drop-shadow-2xl">
            Morning Run
          </h1>
        </article>
        <span className="self-center text-base-100 text-xl font-bold drop-shadow-2xl">
          40 mins
        </span>
      </section>

      <section>
        <p className=" font-medium text-md text-[#ffffff] tracking-wide drop-shadow-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus
          itaque commodi nisi corrupti similique eum mollitia quaerat in modi?
        </p>
      </section>

      <section className="flex justify-between items-center border-t-2 border-slate-300 p-2 pb-0">
        <span className="text-[#ffffff] font-mono text-sm drop-shadow-2xl">{activityDate}  |  {startTime} - {endTime}</span>
        <article className="flex gap-2">
          <span className="material-symbols-outlined text-neutral">edit</span>
          <span className="material-symbols-outlined text-base-100">delete</span>
        </article>
      </section>
    </main>
  );
}

export default MainCard;
