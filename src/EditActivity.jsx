/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import validateForm from "./form-validation";
import ActivityForm from "./components/ActivityForm";
import Layout from "./Layout";

// TODO: remove default activityId after integration

function EditActivity({ activityId = 0 }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activityType, setActivityType] = useState(""); // "Running", "Cycling", "Swimming", "Walking", "Hiking", "Other"
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

  useEffect(() => {
    const getDataById = async (id) => {
      const response = await axios.get(`https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activities/${id}`);

      if (response.status === 200) {
        const data = {...response.data};
        setTitle(data.title);
        setDescription(data.description);
        setActivityType(data.type);
        setStartTime(data.startTime);
        setEndTime(data.endTime);
        setDate(data.date);
        setBarometer(data.barometer);
      } else {
        navigate("/activities");
      }
    }

    getDataById(activityId);
  }, [activityId, navigate]);

  const handleEdit = (e) => {
    e.preventDefault();
    if (validateForm(startTime, endTime, setFormErrors)) {
      const putData = async () => {
        const titleToAdd = title || activityType;
        const putData = {
          title: titleToAdd,
          description: description,
          type: activityType,
          startTime: startTime,
          endTime: endTime,
          date: date,
          duration: duration,
          barometer: barometer,
        };

        const response = await axios.put(`https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activities/${activityId}`, putData);
        
        console.log(response);

        if (response.status === 200) {
          navigate("/activities");
        }
      }

      putData();
    }
  };

  return (
    <Layout>
      <div className="container px-2 lg:px-4 h-[80svh] flex flex-col justify-between mx-auto">
        <header>
          <h1 className="text-lg lg:text-3xl">Edit Activity</h1>
        </header>

        <main className="h-full">
          <ActivityForm 
            handleSubmit={handleEdit}
            title={title} setTitle={setTitle}
            description={description} setDescription={setDescription}
            activityType={activityType} setActivityType={setActivityType}
            startTime={startTime} setStartTime={setStartTime}
            endTime={endTime} setEndTime={setEndTime}
            date={date} setDate={setDate}
            duration={duration} setDuration={setDuration}
            barometer={barometer} setBarometer={setBarometer}
            formErrors={formErrors}
            submitButtonText="Edit"
          />
        </main>
      </div>
    </Layout>
  );
}

export default EditActivity;
