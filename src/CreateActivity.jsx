import { useState, useEffect } from "react";

import Layout from "./Layout";
import "./CreateActivity.css";

// TODO: Push data to mockapi.io
// TODO: Split components
// TODO: add 10m increment/decrement buttons for start time and end time
// TODO: Baro colour
// TODO: Add warning if duration > 5 hours


function CreateActivity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState("Running"); // "Running", "Cycling", "Swimming", "Walking", "Hiking", "Other"
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [barometer, setBarometer] = useState("3"); // "1", "2", "3", "4", "5"
  const [duration, setDuration] = useState({
    hour: 0,
    minute: 0,
  });

  const [formErrors, setFormErrors] = useState({
    time: "",
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (startTime === endTime) {
      errors.time = "Start and End can't be equal."
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  useEffect(() => {
    const currentDate = new Date(); // string: "Fri Jan 12 2024 12:00:19 GMT+0700 (Indochina Time)"
    
    const year = currentDate.getFullYear(); // 1900
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 01
    const day = currentDate.getDate().toString().padStart(2, '0'); // 01
    const hours = currentDate.getHours().toString().padStart(2, '0'); // 00
    const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // 00
    // const rawMinutes = currentDate.getMinutes(); // 0 to 59
    // const minutes = rawMinutes.toString().padStart(2, '0'); // 00
    // let minutesOffset;
    // if (rawMinutes === 59) {
    //   minutesOffset = "00";
    // } else {
    //   minutesOffset = (rawMinutes + 1).toString().padStart(2, '0');
    // }

    console.log(currentDate, year, month, day, hours, minutes);

    setStartTime(`${hours}:${minutes}`);
    setEndTime(`${hours}:${minutes}`);
    setDate(`${year}-${month}-${day}`);
  }, []);

  useEffect(() => {
    if (startTime && endTime && date) {
      const start = new Date(date + 'T' + startTime).getTime();
      let end = new Date(date + 'T' + endTime).getTime();
            
      if (start > end) {
        end += 86400000; // add 1 day (in millisecond)
      }
      
      const time = (end - start) / 1000 / 60;
      const hour = Math.floor(time / 60);
      const minute = time % 60;
      
      setDuration({
        hour: hour,
        minute: minute,
      });
    }
  }, [startTime, endTime, date]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(
          `Title: ${title || activityType}\n` +
          `Description: ${description}\n` +
          `Activity Type: ${activityType}\n` +
          `Start Time: ${startTime}\n` +
          `End Time: ${endTime}\n` +
          `Duration: ${duration.hour} hr ${duration.minute} min\n` +
          `Date: ${date}\n` +
          `Barometer: ${barometer}\n`
      );
    }
  };

  return (
    <Layout>
      <div className="container px-2 lg:px-4 h-[80svh] flex flex-col justify-between mx-auto">
        <header>
          <h1 className="text-lg lg:text-3xl">Create Activity</h1>
        </header>

        <main className="h-full">
          <form 
            className="flex flex-col justify-between h-full"
            onSubmit={handleCreate}
          >
            <div>
              <h2 className="text-base lg:text-xl my-1">Activity Title</h2>
              <input
                className="input input-bordered text-sm w-full lg:w-[30vw]"
                type="text"
                placeholder={activityType + " (default)"}
                aria-label="Activity Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-base lg:text-xl my-1">Description</h2>
              <textarea
                className="textarea textarea-bordered text-sn resize-none w-full lg:w-[30vw]"
                placeholder="Notes for anything (optional)"
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
                    value="Running"
                    aria-label="Running"
                    checked={activityType === "Running"}
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
                    value="Cycling"
                    aria-label="Cycling"
                    checked={activityType === "Cycling"}
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
                    value="Swimming"
                    aria-label="Swimming"
                    checked={activityType === "Swimming"}
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
                    value="Walking"
                    aria-label="Walking"
                    checked={activityType === "Walking"}
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
                    value="Hiking"
                    aria-label="Hiking"
                    checked={activityType === "Hiking"}
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
                    value="Other"
                    aria-label="Other "
                    checked={activityType === "Other"}
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
                    className="rounded border-2"
                    type="time"
                    value={startTime}
                    required
                    aria-label="Start time"
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col items-center">
                  <span>to</span>
                  <span className="text-red-500">{formErrors.time}</span>
                </div>

                <div className="flex flex-col items-center">
                  <h2 className="text-base lg:text-xl my-1">End time</h2>
                  <input
                    className="rounded border-2"
                    type="time"
                    value={endTime}
                    required
                    aria-label="End time"
                    onChange={(e) => {
                      setEndTime(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <h2 className="text-base lg:text-xl my-1">Date:</h2>
              <input
                className="rounded border-2"
                type="date"
                value={date}
                required
                aria-label="Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-2 items-end">
              <h2 className="text-base lg:text-xl">Duration:</h2>
              <span className="">
                {duration.hour || ''} 
                {!duration.hour ? 
                  '' : duration.hour === 1 ?
                    " hour " : " hours "} 
                {duration.minute || ''}
                {!duration.minute ?
                  '' : duration.minute === 1 ?
                    " minute" : " minutes"}                
              </span>
            </div>

            <div>
              <h2 className="text-base lg:text-xl my-1">How did you feel?</h2>
              <div className="flex flex-wrap justify-around max-w-full lg:max-w-[30vw]">
                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    required
                    name="barometer"
                    aria-label="Exhausted"
                    value="1"
                    checked={barometer === "1"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined baro baro-one">
                    sentiment_very_dissatisfied
                  </span>
                  <span className="radio-label text-xs">Exhausted</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="barometer"
                    aria-label="Tired"
                    value="2"
                    checked={barometer === "2"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined baro baro-two">
                    sentiment_stressed
                  </span>
                  <span className="radio-label text-xs">Tired</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="barometer"
                    aria-label="Okay"
                    value="3"
                    checked={barometer === "3"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined baro baro-three">
                    sentiment_neutral
                  </span>
                  <span className="radio-label text-xs">Okay</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="barometer"
                    aria-label="Fresh"
                    value="4"
                    checked={barometer === "4"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined baro baro-four">
                    sentiment_content
                  </span>
                  <span className="radio-label text-xs">Fresh</span>
                </label>

                <label className="flex flex-col items-center">
                  <input
                    className="radio hidden"
                    type="radio"
                    name="barometer"
                    aria-label="Energized"
                    value="5"
                    checked={barometer === "5"}
                    onChange={(e) => setBarometer(e.target.value)}
                  />
                  <span className="material-symbols-outlined baro baro-five">
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
              >
                Create
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}

export default CreateActivity;
