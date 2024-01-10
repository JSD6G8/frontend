import { useState } from "react";

import Layout from "./Layout";
import "./CreateActivity.css"

function CreateActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState(""); // "running", "cycling", "swimming", "walking", "hiking", "other"
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [barometer, setBarometer] = useState(3); // 1, 2, 3, 4, 5
  
  const handleSave = () => {
    alert(`Title: ${title}\n` + 
    `Description: ${description}\n` +
    `Activity Type: ${activityType}\n` +
    `Start Time: ${startTime}\n` +
    `End Time: ${endTime}\n` +
    `Date: ${description}\n` +
    `Barometer: ${barometer}\n`
    );
  }

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

        <main className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-base lg:text-xl my-1">Activity Title</h2>
            <input
              type="text"
              placeholder="Exercise"
              className="input input-bordered text-sm w-full lg:w-[30vw]"
              aria-label="Activity Title"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-base lg:text-xl my-1">Description</h2>
            <textarea
              className="textarea textarea-bordered text-sn resize-none w-full lg:w-[30vw]"
              placeholder="Notes for anything"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <h2 className="text-base lg:text-xl my-1">Activity Type</h2>

            <div className="flex flex-wrap justify-around max-w-full lg:max-w-[30vw]">
              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  checked
                  aria-label="Running"
                />
                <span className="material-symbols-outlined icon">sprint</span>
                <span className="radio-label text-xs">Running</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  aria-label="Cycling"
                />
                <span className="material-symbols-outlined icon">
                  directions_bike
                </span>
                <span className="radio-label text-xs">Cycling</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  aria-label="Swimming"
                />
                <span className="material-symbols-outlined icon">pool</span>
                <span className="radio-label text-xs">Swimming</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  aria-label="Walking"
                />
                <span className="material-symbols-outlined icon">
                  directions_walk
                </span>
                <span className="radio-label text-xs">Walking</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  aria-label="Hiking"
                />
                <span className="material-symbols-outlined icon">hiking</span>
                <span className="radio-label text-xs">Hiking</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="activityType"
                  className="radio"
                  aria-label="Other "
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
                  type="time"
                  aria-label="Start time" 
                  onChange={e => setStartTime(e.target.value)}
                />
              </div>

              <span>to</span>

              <div className="flex flex-col items-center">
                <h2 className="text-base lg:text-xl my-1">End time</h2>
                <input 
                  type="time" 
                  aria-label="End time" 
                  onChange={e => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <h2 className="text-base lg:text-xl my-1">Date:</h2>
            <input 
              type="date" 
              aria-label="Date" 
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <div>
            <h2 className="text-base lg:text-xl my-1">How did you feel?</h2>
            <div className="flex flex-wrap justify-around max-w-full lg:max-w-[30vw]">
              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="barometer"
                  className="radio"
                  aria-label="Exhausted"
                />
                <span className="material-symbols-outlined icon">
                  sentiment_very_dissatisfied
                </span>
                <span className="radio-label text-xs">Exhausted</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="barometer"
                  className="radio"
                  aria-label="Tired"
                />
                <span className="material-symbols-outlined icon">
                  sentiment_stressed
                </span>
                <span className="radio-label text-xs">Tired</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="barometer"
                  className="radio"
                  checked
                  aria-label="Okay"
                />
                <span className="material-symbols-outlined icon">
                  sentiment_neutral
                </span>
                <span className="radio-label text-xs">Okay</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="barometer"
                  className="radio"
                  aria-label="Fresh"
                />
                <span className="material-symbols-outlined icon">
                  sentiment_content
                </span>
                <span className="radio-label text-xs">Fresh</span>
              </label>

              <label className="flex flex-col items-center">
                <input
                  type="radio"
                  name="barometer"
                  className="radio"
                  aria-label="Energized"
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
              onClick={() => handleSave()}
            >Save</button>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default CreateActivity;
