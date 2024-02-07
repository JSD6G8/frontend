import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";

function ActivitiesDetails() {
  const activityId = useParams().id;
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataById = async (id) => {
      const response = await axios.get(
        `https://jsd6-loglife-backend.onrender.com/activities/${id}`,
      );
      if (response.status === 200) {
        const data = { ...response.data };
        setActivity(data);
        setLoading(false);
      } else {
        navigate("/activities");
      }
    };

    getDataById(activityId);
  }, [activityId, navigate]);

  return (
    <Layout>
      <main className="container mx-auto flex max-w-lg flex-col items-center px-2 py-2 md:mt-4 md:rounded-xl md:bg-white md:drop-shadow-md lg:px-4">
        {loading ? (
          <span className="loading loading-spinner text-primary"></span>
        ) : (
          <>
            <h1>Activities Details</h1>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <p>{activity.type}</p>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
            <p>{activity.date}</p>
            <p>{activity.duration.hour}</p>
            <p>{activity.duration.minute}</p>
            <p>{activity.barometer}</p>
          </>
        )}
      </main>
    </Layout>
  );
}

export default ActivitiesDetails;
