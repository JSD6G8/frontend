import axios from "axios";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formatDuration from "./utils/formatDuration";

import Layout from "./Layout";

function ActivitiesDetails() {
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const barometerColors = {
    1: "bg-info",
    2: "bg-success",
    3: "bg-warning",
    4: "bg-error",
    5: "bg-power",
  };
  const barometerColorClass = barometerColors[activity?.barometer];

  const barometerImages = {
    1: "/baro_1.png",
    2: "/baro_2.png",
    3: "/baro_3.png",
    4: "/baro_4.png",
    5: "/baro_5.png",
  };
  const barometerImageURL = barometerImages[activity?.barometer];

  const barometerIcons = {
    1: "sentiment_very_dissatisfied",
    2: "sentiment_stressed",
    3: "sentiment_neutral",
    4: "sentiment_content",
    5: "sentiment_very_satisfied",
  };
  const barometerIconMaterial = barometerIcons[activity?.barometer];

  const barometerTexts = {
    1: "Very Weak",
    2: "Weak",
    3: "Normal",
    4: "Strong",
    5: "Very Strong",
  };

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

  const dt = DateTime.fromISO(activity?.date).toLocaleString(
    DateTime.DATE_HUGE,
  );

  useEffect(() => {
    const getDataById = async (id) => {
      const response = await axios.get(
        `https://jsd6-loglife-backend.onrender.com/activities/${id}`,
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        const data = { ...response.data };
        setActivity(data);
        setLoading(false);
      } else {
        navigate(-1);
      }
    };

    getDataById(activityId);
  }, [reload]);

  const handleDelete = async () => {
    const response = await axios.delete(
      `https://jsd6-loglife-backend.onrender.com/activities/${activityId}`,
      {
        withCredentials: true,
      },
    );
    if (response.status === 200) {
      navigate("/activities");
    }
  };

  const handleUploadImage = async (modal, inputId) => {
    const input = document.getElementById(inputId);
    const file = input.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(
      `https://jsd6-loglife-backend.onrender.com/activities/${activityId}/image`,
      formData,
      {
        withCredentials: true,
      },
    );
    if (response.status === 201) {
      setReload(!reload);
    }
    document.getElementById(modal).close();
  };

  const handleDeleteImage = async (modal) => {
    const publicId = activity.image.publicId;
    const response = await axios.delete(
      `https://jsd6-loglife-backend.onrender.com/activities/${activityId}/image/${publicId}`,
      {
        withCredentials: true,
      },
    );
    if (response.status === 200) {
      setReload(!reload);
    }
    document.getElementById(modal).close();
  };

  return (
    <Layout>
      <main className="container mx-auto flex max-w-2xl flex-col items-center max-md:h-fit md:mt-auto md:flex-row md:rounded-2xl md:bg-white md:shadow-xl">
        {loading ? (
          <span className="loading loading-spinner mt-10 text-primary"></span>
        ) : (
          <>
            <div
              className={`flex w-full items-center justify-center md:h-full md:flex-1 md:flex-col-reverse md:rounded-l-2xl ${barometerColorClass}`}
            >
              <h1 className="flex-auto text-center text-5xl font-semibold text-white md:flex-none md:-translate-y-10 md:px-2">
                {activity.type.toUpperCase()}
              </h1>
              <img
                className="ml-2 mt-2 size-24 md:size-32 md:-translate-y-10"
                src={barometerImageURL}
                alt="barometer"
              />
            </div>
            <div className="w-full p-2">
              {activity.image && (
                <div>
                  <img
                    className="max:md:max-h-56 max-h-64 w-full object-cover pb-2 max-sm:max-h-44 md:rounded-tr-2xl"
                    src={activity.image.url}
                    alt="activity"
                  />
                  <button
                    className="absolute flex min-h-12 min-w-12 -translate-y-16 translate-x-2 items-center justify-center rounded-full border-2 border-warning bg-white shadow-lg"
                    onClick={() =>
                      document.getElementById("change_image_modal").showModal()
                    }
                  >
                    <span
                      className="material-symbols-outlined"
                      style={materialIconStyle}
                    >
                      image
                    </span>
                  </button>
                </div>
              )}
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
                    {formatDuration(activity.duration.hour, "hour", "hours")}{" "}
                    {formatDuration(
                      activity.duration.minute,
                      "minute",
                      "minutes",
                    )}
                  </p>
                </div>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-base-200">
                  <span
                    className="material-symbols-outlined"
                    style={materialIconStyle}
                  >
                    {barometerIconMaterial}
                  </span>
                </div>
                <p className="font-light">
                  Feeling: {barometerTexts[activity.barometer]}
                </p>
              </div>
              <div className="my-2 h-0.5 bg-base-200"></div>

              <div className="flex justify-between py-4">
                <div className="tooltip tooltip-secondary" data-tip="Back">
                  <button
                    className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-primary bg-white shadow-md"
                    onClick={() => navigate("/activities")}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={materialIconStyle}
                    >
                      arrow_back
                    </span>
                  </button>
                </div>

                <div className="flex justify-end gap-2">
                  {activity.image ? (
                    <div className="h-2 w-2"></div>
                  ) : (
                    <div
                      className="tooltip tooltip-success"
                      data-tip="Add Photo"
                    >
                      <button
                        className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-power bg-white shadow-md"
                        onClick={() =>
                          document
                            .getElementById("upload_image_modal")
                            .showModal()
                        }
                      >
                        <span
                          className="material-symbols-outlined"
                          style={materialIconStyle}
                        >
                          add_photo_alternate
                        </span>
                      </button>
                    </div>
                  )}
                  <div
                    className="tooltip tooltip-success"
                    data-tip="Edit Activity"
                  >
                    <button
                      className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-power bg-white shadow-md"
                      onClick={() => navigate(`/activities/edit/${activityId}`)}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={materialIconStyle}
                      >
                        edit
                      </span>
                    </button>
                  </div>

                  <div
                    className="md:tooltip md:tooltip-info"
                    data-tip="Delete Activity"
                  >
                    <button
                      className="flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-info bg-white shadow-md"
                      onClick={() =>
                        document.getElementById("delete_modal").showModal()
                      }
                    >
                      <span
                        className="material-symbols-outlined"
                        style={materialIconStyle}
                      >
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <dialog
              id="delete_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="text-lg font-bold">Delete Activity</h3>
                <p className="py-4">
                  Are you sure you want to delete this activity?
                  <br />
                  This cannot be undone.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn mr-2">Cancel</button>
                    <button
                      className="btn btn-info text-white"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </dialog>

            <dialog
              id="upload_image_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="text-base font-bold">Upload New Image</h3>
                <div className="my-2">
                  <input
                    className="file-input file-input-bordered w-full"
                    id="imageUploadInput"
                    type="file"
                    accept="image/*"
                    capture="camera"
                    aria-label="Upload Image"
                  />
                </div>
                <button
                  className="btn btn-primary text-white"
                  onClick={() => {
                    handleUploadImage("upload_image_modal", "imageUploadInput");
                  }}
                >
                  Upload
                </button>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

            <dialog
              id="change_image_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="text-base font-bold">Change Image</h3>
                <div className="mt-2">
                  <input
                    className="file-input file-input-bordered w-full"
                    id="imageChangeInput"
                    type="file"
                    accept="image/*"
                    capture="camera"
                    aria-label="Change Image"
                  />
                </div>

                <button
                  className="btn btn-primary mt-2 text-white"
                  onClick={() => {
                    handleUploadImage("change_image_modal", "imageChangeInput");
                  }}
                >
                  Change
                </button>
                <div className="divider"></div>
                <h3 className="text-base font-bold">Remove Image</h3>
                <button
                  className="btn btn-info mt-2 text-white"
                  onClick={() => {
                    handleDeleteImage("change_image_modal");
                  }}
                >
                  Remove
                </button>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        )}
      </main>
    </Layout>
  );
}

export default ActivitiesDetails;
