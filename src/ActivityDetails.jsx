import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";

function ActivitiesDetails() {
  const activityId = useParams().id;
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const barometerColor = {
    1: "bg-info",
    2: "bg-success",
    3: "bg-warning",
    4: "bg-error",
    5: "bg-power",
  };
  const barometerColorClass = barometerColor[activity?.barometer];
  const barometerImage = {
    1: '/baro_1.png',
    2: '/baro_2.png',
    3: '/baro_3.png',
    4: '/baro_4.png',
    5: '/baro_5.png',
  }
  const barometerImageURL = barometerImage[activity?.barometer];


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
      <main className="container mx-auto flex max-w-lg flex-col items-center">
        {loading ? (
          <span className="loading loading-spinner text-primary"></span>
        ) : (
          <>
            <div className={`flex items-center justify-center w-full ${barometerColorClass}`}>
              <h1 className="flex-auto text-center text-5xl text-white font-semibold">{activity.type.toUpperCase()}</h1>
              <img className="mr-4 size-24" src={barometerImageURL} alt="barometer" />
            </div>
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
