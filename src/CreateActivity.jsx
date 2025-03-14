import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "./Layout";
import ActivityForm from "./components/ActivityForm";
import validateForm from "./form-validation";

// TODO: add 10m increment/decrement buttons for start time and end time
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

  const navigate = useNavigate();

  // Set initial date and time
  useEffect(() => {
    const currentDate = new Date(); // string: "Fri Jan 12 2024 12:00:19 GMT+0700 (Indochina Time)"

    const year = currentDate.getFullYear(); // 1900
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // 01
    const day = currentDate.getDate().toString().padStart(2, "0"); // 01
    const hours = currentDate.getHours().toString().padStart(2, "0"); // 00
    const minutes = currentDate.getMinutes().toString().padStart(2, "0"); // 00

    setStartTime(`${hours}:${minutes}`);
    setEndTime(`${hours}:${minutes}`);
    setDate(`${year}-${month}-${day}`);
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    if (validateForm(startTime, endTime, setFormErrors)) {
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

        const response = await axios.post(
          "https://jsd6-loglife-backend.onrender.com/v2/activities/",
          postData,
          {
            withCredentials: true,
          },
        );

        if (response.status === 201) {
          navigate("/activities");
        }
      };

      postData();
    }
  };

  return (
    <Layout>
      <main className="container mx-auto px-2 py-2 md:my-4 md:max-w-lg md:rounded-xl md:bg-white md:drop-shadow-md lg:px-4">
        <ActivityForm
          formHeading="Create Activity"
          handleSubmit={handleCreate}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          activityType={activityType}
          setActivityType={setActivityType}
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
          date={date}
          setDate={setDate}
          duration={duration}
          setDuration={setDuration}
          barometer={barometer}
          setBarometer={setBarometer}
          formErrors={formErrors}
          submitButtonText="Create"
        />
      </main>
    </Layout>
  );
}

export default CreateActivity;
