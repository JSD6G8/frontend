/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./providers/authProvider";

import Layout from "./Layout";
import ActivityForm from "./components/ActivityForm";
import validateForm from "./form-validation";

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

  const activityId = useParams().activityId;
  const navigate = useNavigate();

  useEffect(() => {
    const getDataById = async (id) => {
      const response = await axios.get(
        `https://api.loglife.guru/v2/activities/${id}`,
        {
          withCredentials: true,
        },
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
        navigate(-1);
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
          `https://api.loglife.guru/v2/activities/${activityId}`,
          putData,
          {
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          navigate(`/activities/${activityId}`);
        }
      };

      putData();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 py-2 md:my-4 md:max-w-lg md:rounded-xl md:bg-white md:drop-shadow-md lg:px-4">
        <main className="h-full">
          <ActivityForm
            formHeading="Edit Activity"
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
