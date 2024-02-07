import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <main>
      <h1>Activities Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{activity.title}</h2>
          <p>{activity.description}</p>
          <p>{activity.type}</p>
          <p>{activity.startTime}</p>
          <p>{activity.endTime}</p>
          <p>{activity.date}</p>
          <p>{activity.duration}</p>
          <p>{activity.barometer}</p>
        </div>
      )}
    </main>
  );
}

export default ActivitiesDetails;
