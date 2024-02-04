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
      <section className="flex justify-between rounded-t-lg border-b-2 border-white pb-2">
        <article className="flex">
          <div className="flex h-10 w-10 flex-none flex-col justify-evenly rounded-full bg-slate-100 drop-shadow-2xl">
            <span className="material-symbols-outlined self-center">
              {activitySymbol}
            </span>
          </div>
          <h1 className="mx-3 self-center text-xl  font-extrabold text-slate-800 drop-shadow-2xl">
            {activity.title}
          </h1>
        </article>
        <span className="self-center text-xl font-bold text-slate-800 drop-shadow-2xl">
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
        <p className=" text-lg font-medium tracking-wide text-slate-800 drop-shadow-2xl">
          {activity.description || "It was a good experience isn't it? 😺"}
        </p>
      </section>

      <section className="flex items-center justify-between border-t-2 border-white pb-0 pt-2">
        <div className="flex flex-col">
          <span className=" text-md font-bold text-slate-800 drop-shadow-2xl">
            {activity.date}
          </span>
          <span className=" text-sm font-light text-slate-800 drop-shadow-2xl">
            {activity.startTime} - {activity.endTime}
          </span>
        </div>

        <article className="ml-1 flex gap-1">
          <a
            className="material-symbols-outlined btn btn-sm
             rounded-md border bg-yellow-600 text-white"
            href={`/activities/edit?id=${activity._id}`}
          >
            edit
          </a>
          <button
            className="material-symbols-outlined btn btn-sm ml-2 bg-red-700 text-white"
            onClick={() =>
              document.getElementById("delete_activity").showModal()
            }
          >
            delete
          </button>

          <dialog id="delete_activity" className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Confirm to delete?</h3>
              <p className="py-4">This deletion can't be undone!</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn mr-3">Close</button>
                  <button
                    className="btn bg-red-500 text-white"
                    onClick={() => handleDelete(activity._id)}
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </article>
      </section>
    </main>
  );
}

export default MainCard;
