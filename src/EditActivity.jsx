import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ActivityForm from "./components/ActivityForm";
import Layout from "./Layout";

// TODO: add 10m increment/decrement buttons for start time and end time
// TODO: Baro colour
// TODO: Add warning if duration > 5 hours


function EditActivity() {
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

  const navigate = useNavigate();
  

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

      const postData = async () => {
        const titleToAdd = title || activityType;
        const postData = {
          title: titleToAdd,
          description: description,
          type: activityType,
          startTime: startTime,
          endTime: endTime,
          date: date,
          duration: duration,
          barometer: barometer,
        };

        const response = await axios.post("https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activities", postData);
        
        if (response.status === 201) {
          navigate("/activities");
        }
      }

      postData();
    }
  };

  return (
    <Layout>
      <div className="container px-2 lg:px-4 h-[80svh] flex flex-col justify-between mx-auto">
        <header>
          <h1 className="text-lg lg:text-3xl">Create Activity</h1>
        </header>

        <main className="h-full">
          <ActivityForm 
            handleSubmit={handleCreate}
            setTitle={setTitle}
            setDescription={setDescription}
            activityType={activityType} setActivityType={setActivityType}
            startTime={startTime} setStartTime={setStartTime}
            endTime={endTime} setEndTime={setEndTime}
            date={date} setDate={setDate}
            duration={duration} setDuration={setDuration}
            barometer={barometer} setBarometer={setBarometer}
            formErrors={formErrors}
          />
        </main>
      </div>
    </Layout>
  );
}

export default EditActivity;
