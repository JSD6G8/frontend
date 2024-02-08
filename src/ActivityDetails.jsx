import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import formatDuration from "./utils/formatDuration";
import { DateTime } from "luxon";

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
    1: "/baro_1.png",
    2: "/baro_2.png",
    3: "/baro_3.png",
    4: "/baro_4.png",
    5: "/baro_5.png",
  };
  const barometerImageURL = barometerImage[activity?.barometer];
  const materialIconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
  };
  const materialIcon = {
    Running: "sprint",
    Cycling: "directions_bike",
    Swimming: "pool",
    Walking: "directions_walk",
    Hiking: "hiking",
    Other: "timer",
  };

  const dt = DateTime.fromISO(activity?.date).toLocaleString(DateTime.DATE_HUGE);

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
            <div
              className={`flex w-full items-center justify-center ${barometerColorClass}`}
            >
              <h1 className="text-center text-5xl font-semibold text-white">
                {activity.type.toUpperCase()}
              </h1>
              <img
                className="size-24"
                src={barometerImageURL}
                alt="barometer"
              />
            </div>
            <div className="w-full p-2">
              <div className="flex flex-row items-center gap-2">
                <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-base-200">
                  <span
                    className="material-symbols-outlined"
                    style={materialIconStyle}
                  >
                    {materialIcon[activity.type]}
                  </span>
                </div>
                <h2 className="text-lg font-bold">{activity.title}</h2>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-base-200">
                  <span
                    className="material-symbols-outlined"
                    style={materialIconStyle}
                  >
                    description
                  </span>
                </div>
                <p className="font-light">
                  {activity.description || "It was good effort!"}
                </p>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-base-200">
                  <span
                    className="material-symbols-outlined"
                    style={materialIconStyle}
                  >
                    date_range
                  </span>
                </div>
                <p className="font-light">{dt}</p>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-base-200">
                  <span
                    className="material-symbols-outlined"
                    style={materialIconStyle}
                  >
                    schedule
                  </span>
                </div>
                <div>
                  <p className="font-light">
                    {activity.startTime} - {activity.endTime}
                  </p>
                  <p className="font-light">
                    {formatDuration(activity.duration.hour, "hour", "hours")}{" "}{formatDuration(activity.duration.minute, "minute", "minutes")}
                  </p>
                </div>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}

export default ActivitiesDetails;
