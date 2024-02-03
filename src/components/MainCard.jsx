/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";

// TODO: Edit functionality
// TODO: The color hasn't reload after useEffect on main page active

function MainCard({ activity, reload, setReload }) {
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
  }, [reload, setReload]);

  const handleDelete = async (id) => {
    console.log(id);
    const response = await axios.delete(
      `https://jsd6-loglife-backend.onrender.com/activities/${id}`,
    );

    if (response.status === 200) {
      setReload(!reload);
    }
  };

  return (
    <main
      className={`${moodColor} m-3 flex flex-col gap-3 rounded-2xl p-4 shadow-2xl`}
    >
      <section className="flex justify-between rounded-t-lg border-b-2 border-slate-300 pb-2">
        <article className="flex">
          <div className="flex h-10 w-10 flex-col  justify-evenly rounded-full bg-slate-100 drop-shadow-2xl">
            <span className="material-symbols-outlined self-center">
              {activitySymbol}
            </span>
          </div>
          <h1 className="mx-3 self-center text-xl  font-extrabold text-[#ffffff] drop-shadow-2xl">
            {activity.title}
          </h1>
        </article>
        <span className="self-center text-xl font-bold text-base-100 drop-shadow-2xl">
          {activity.duration.hour || ""}
          {!activity.duration.hour
            ? ""
            : activity.duration.hour === 1
              ? " hour "
              : " hours "}
          {activity.duration.minute || ""}
          {!activity.duration.minute
            ? ""
            : activity.duration.minute === 1
              ? " minute"
              : " minutes"}
        </span>
      </section>

      <section>
        <p className=" text-md font-medium tracking-wide text-[#ffffff] drop-shadow-2xl">
          {activity.description || "It was a good experience isn't it? 😺"}
        </p>
      </section>

      <section className="flex items-center justify-between border-t-2 border-slate-300 p-2 pb-0">
        <span className="font-mono text-sm text-[#ffffff] drop-shadow-2xl">
          {activity.date} | {activity.startTime} - {activity.endTime}
        </span>
        <article className="flex gap-2">
          <a
            className="material-symbols-outlined text-neutral"
            href={`/activities/edit?id=${activity._id}`}
          >
            edit
          </a>
          <button
            className="material-symbols-outlined text-base-100 hover:bg-slate-200"
            onClick={() => handleDelete(activity._id)}
          >
            delete
          </button>
        </article>
      </section>
    </main>
  );
}

export default MainCard;
