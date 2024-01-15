/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function MainCard({ activity }) {
  const [moodColor, setMoodColor] = useState("");
  const [activitySymbol, setActivitySymbol] = useState("");
  
  // ?? render card once with conditional for color and symbol
  useEffect(() => {
    const eachColor = () => {
      switch (activity.barometer) {
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
      switch (activity.type) {
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
              {activitySymbol}
            </span>
          </div>
          <h1 className="text-[#ffffff] font-extrabold text-xl  mx-3 self-center drop-shadow-2xl">
            {activity.title}
          </h1>
        </article>
        <span className="self-center text-base-100 text-xl font-bold drop-shadow-2xl">
          {activity.duration.hour || ""} 
          {!activity.duration.hour ? 
            "" 
            : activity.duration.hour === 1 ?
              " hour " 
              : " hours "} 
          {activity.duration.minute || ""} 
          {!activity.duration.minute ? 
            ""
            : activity.duration.minute === 1 ?
              " minute"
              : " minutes"}
        </span>
      </section>

      <section>
        <p className=" font-medium text-md text-[#ffffff] tracking-wide drop-shadow-2xl">
          {activity.description || "It was a good experience isn't it? 😺"}
        </p>
      </section>

      <section className="flex justify-between items-center border-t-2 border-slate-300 p-2 pb-0">
        <span className="text-[#ffffff] font-mono text-sm drop-shadow-2xl">{activity.date}  |  {activity.startTime} - {activity.endTime}</span>
        <article className="flex gap-2">
          <span className="material-symbols-outlined text-neutral">edit</span>
          <span className="material-symbols-outlined text-base-100">delete</span>
        </article>
      </section>
    </main>
  );
}

export default MainCard;
