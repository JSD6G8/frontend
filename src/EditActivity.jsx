/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Layout from "./Layout";
import ActivityForm from "./components/ActivityForm";
import validateForm from "./form-validation";

// TODO: remove default activityId after integration

function EditActivity() {
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

  const [searchParams, setSearchParams] = useSearchParams();
  const activityId = searchParams.get("id");

  // console.log(activityId);

  const navigate = useNavigate();

  // console.log(searchParams);

  useEffect(() => {
    const getDataById = async (id) => {
      const response = await axios.get(
        `https://jsd6-loglife-backend.onrender.com/activities/${id}`,
      );

      if (response.status === 200) {
        const data = { ...response.data };
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
    };

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

        const response = await axios.put(
          `https://jsd6-loglife-backend.onrender.com/activities/${activityId}`,
          putData,
        );

        // console.log(response);

        if (response.status === 200) {
          navigate("/activities");
        }
      };

      putData();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto flex h-[80svh] flex-col justify-between px-2 lg:px-4">
        <header>
          <h1 className="text-lg lg:text-3xl">Edit Activity</h1>
        </header>

        <main className="h-full">
          <ActivityForm
            handleSubmit={handleEdit}
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
            submitButtonText="Edit"
          />
        </main>
      </div>
    </Layout>
  );
}

export default EditActivity;
