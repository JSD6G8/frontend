import { useState } from "react";

import Layout from "./Layout";
import "./CreateActivity.css";

function CreateActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState("running"); // "running", "cycling", "swimming", "walking", "hiking", "other"
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [barometer, setBarometer] = useState("3"); // "1", "2", "3", "4", "5"
  // const [formErrors, setFormErrors] = useState({
  //   title: "",
  //   startTime: "",
  //   endTime: "",
  //   date: "",
  // });

  // const validateForm = () => {
  //   let errors = {};
  //   let isValid = true;

  //   if (!title.trim()) {
  //     errors.title = "Activity Title is required."
  //     isValid = false;
  //   }

  //   if (!startTime) {
  //     errors.startTime = "Activity Title is required."
  //     isValid = false;
  //   }

  //   if (!title.trim()) {
  //     errors.title = "Activity Title is required."
  //     isValid = false;
  //   }

  //   if (!title.trim()) {
  //     errors.title = "Activity Title is required."
  //     isValid = false;
  //   }
  // };

  const handleSave = () => {
    alert(
      `Title: ${title}\n` +
        `Description: ${description}\n` +
        `Activity Type: ${activityType}\n` +
        `Start Time: ${startTime}\n` +
        `End Time: ${endTime}\n` +
        `Date: ${date}\n` +
        `Barometer: ${barometer}\n`
    );
  };

  return (
    <Layout>
      <div className="container px-2 lg:px-4 h-[100svh] flex flex-col justify-between mx-auto">
        <header>
          <div className="navbar bg-base-100 border-b-2 border-black lg:w-[30vw]">
            <div className="flex-1">
              <h1 className="text-lg lg:text-3xl">Create Activity</h1>
            </div>
          </div>
        </header>

        <main className="h-full">
          <form className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-base lg:text-xl my-1">Activity Title</h2>
              <input
                className="input input-bordered text-sm w-full lg:w-[30vw]"
                required
                type="text"
                placeholder="Exercise"
                aria-label="Activity Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-base lg:text-xl my-1">Description</h2>
              <textarea
                className="textarea textarea-bordered text-sn resize-none w-full lg:w-[30vw]"
                required
                placeholder="Notes for anything"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <h2 className="text-base lg:text-xl my-1">Activity Type</h2>

              <div className="flex flex-wrap justify-around max-w-full lg:max-w-[30vw]">
                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    required
                    type="radio"
                    name="activityType"
                    value="running"
                    aria-label="Running"
                    checked={activityType === "running"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">sprint</span>
                  <span className="radio-label text-xs">Running</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="activityType"
                    value="cycling"
                    aria-label="Cycling"
                    checked={activityType === "cycling"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    directions_bike
                  </span>
                  <span className="radio-label text-xs">Cycling</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="activityType"
                    value="swimming"
                    aria-label="Swimming"
                    checked={activityType === "swimming"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">pool</span>
                  <span className="radio-label text-xs">Swimming</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="activityType"
                    value="walking"
                    aria-label="Walking"
                    checked={activityType === "walking"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    directions_walk
                  </span>
                  <span className="radio-label text-xs">Walking</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="activityType"
                    value="hiking"
                    aria-label="Hiking"
                    checked={activityType === "hiking"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">hiking</span>
                  <span className="radio-label text-xs">Hiking</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="activityType"
                    value="other"
                    aria-label="Other "
                    checked={activityType === "other"}
                    onChange={(e) => setActivityType(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">timer</span>
                  <span className="radio-label text-xs">Other</span>
                </label>
              </div>
            </div>

            <div>
              <div className="flex justify-around items-center max-w-full lg:max-w-[30vw]">
                <div className="flex flex-col items-center">
                  <h2 className="text-base lg:text-xl my-1">Start time</h2>
                  <input
                    type="date"
                    required
                    aria-label="Start time"
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>

                <span>to</span>

                <div className="flex flex-col items-center">
                  <h2 className="text-base lg:text-xl my-1">End time</h2>
                  <input
                    type="time"
                    required
                    aria-label="End time"
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <h2 className="text-base lg:text-xl my-1">Date:</h2>
              <input
                type="date"
                required
                aria-label="Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-base lg:text-xl my-1">How did you feel?</h2>
              <div className="flex flex-wrap justify-around max-w-full lg:max-w-[30vw]">
                <label className="flex flex-col items-center">
                  <input
                    className="radio"
                    type="radio"
                    required
                    name="barometer"
                    aria-label="Exhausted"
                    value="1"
                    checked={barometer === "1"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    sentiment_very_dissatisfied
                  </span>
                  <span className="radio-label text-xs">Exhausted</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio"
                    type="radio"
                    name="barometer"
                    aria-label="Tired"
                    value="2"
                    checked={barometer === "2"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    sentiment_stressed
                  </span>
                  <span className="radio-label text-xs">Tired</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio"
                    type="radio"
                    name="barometer"
                    aria-label="Okay"
                    value="3"
                    checked={barometer === "3"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    sentiment_neutral
                  </span>
                  <span className="radio-label text-xs">Okay</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio"
                    type="radio"
                    name="barometer"
                    aria-label="Fresh"
                    value="4"
                    checked={barometer === "4"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    sentiment_content
                  </span>
                  <span className="radio-label text-xs">Fresh</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio"
                    type="radio"
                    name="barometer"
                    aria-label="Energized"
                    value="5"
                    checked={barometer === "5"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined icon">
                    sentiment_very_satisfied
                  </span>
                  <span className="radio-label text-xs">Energized</span>
                </label>
              </div>
            </div>

            <div className="flex justify-stretch gap-2 py-2 w-full lg:max-w-[30vw]">
              <button className="btn flex-auto">Cancel</button>
              <button
                className="btn flex-auto btn-primary"
                type="submit"
                onClick={() => handleSave()}
              >
                Save
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}

export default CreateActivity;
