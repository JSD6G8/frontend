import { useEffect } from "react";
import "./ActivityForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ActivityForm({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  activityType,
  setActivityType,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  date,
  setDate,
  duration,
  setDuration,
  barometer,
  setBarometer,
  formErrors,
  submitButtonText = "Create",
}) {
  const backToActivities = useNavigate();

  useEffect(() => {
    if (startTime && endTime && date) {
      const start = new Date(date + "T" + startTime).getTime();
      let end = new Date(date + "T" + endTime).getTime();

      if (start > end) {
        end += 86400000; // add 1 day (in millisecond)
      }

      const time = (end - start) / 1000 / 60;
      const hour = Math.floor(time / 60);
      const minute = time % 60;

      setDuration({
        hour: hour,
        minute: minute,
      });
    }
  }, [startTime, endTime, date, setDuration]);

  const formatDuration = (value, singular, plural) => {
    if (!value) return '';
    return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
  }

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="my-1 text-base lg:text-xl">Activity Title</h2>
        <input
          className="input input-bordered w-full text-sm lg:w-[30vw]"
          type="text"
          placeholder={activityType + " (default)"}
          value={title}
          aria-label="Activity Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <h2 className="my-1 text-base lg:text-xl">Description</h2>
        <textarea
          className="text-sn textarea textarea-bordered w-full resize-none lg:w-[30vw]"
          placeholder="Notes for anything (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <h2 className="my-1 text-base lg:text-xl">Activity Type</h2>

        <div className="flex max-w-full flex-wrap justify-around lg:max-w-[30vw]">
          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              required
              type="radio"
              name="activityType"
              value="Running"
              aria-label="Running"
              checked={activityType === "Running"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">sprint</span>
            <span className="radio-label text-xs">Running</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="activityType"
              value="Cycling"
              aria-label="Cycling"
              checked={activityType === "Cycling"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">
              directions_bike
            </span>
            <span className="radio-label text-xs">Cycling</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="activityType"
              value="Swimming"
              aria-label="Swimming"
              checked={activityType === "Swimming"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">pool</span>
            <span className="radio-label text-xs">Swimming</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="activityType"
              value="Walking"
              aria-label="Walking"
              checked={activityType === "Walking"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">
              directions_walk
            </span>
            <span className="radio-label text-xs">Walking</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="activityType"
              value="Hiking"
              aria-label="Hiking"
              checked={activityType === "Hiking"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">hiking</span>
            <span className="radio-label text-xs">Hiking</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="activityType"
              value="Other"
              aria-label="Other "
              checked={activityType === "Other"}
              onChange={(e) => setActivityType(e.target.value)}
            />
            <span className="material-symbols-outlined form-icon">timer</span>
            <span className="radio-label text-xs">Other</span>
          </label>
        </div>
      </div>

      <div>
        <div className="flex max-w-full items-center justify-around lg:max-w-[30vw]">
          <div className="flex flex-col items-center">
            <h2 className="my-1 text-base lg:text-xl">Start time</h2>
            <input
              className="rounded border-2"
              type="time"
              value={startTime}
              required
              aria-label="Start time"
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col items-center">
            <span>to</span>
            <span className="text-red-500">{formErrors.time}</span>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="my-1 text-base lg:text-xl">End time</h2>
            <input
              className="rounded border-2"
              type="time"
              value={endTime}
              required
              aria-label="End time"
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <h2 className="my-1 text-base lg:text-xl">Date:</h2>
        <input
          className="rounded border-2"
          type="date"
          value={date}
          required
          aria-label="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="flex items-end gap-2">
        <h2 className="text-base lg:text-xl">Duration:</h2>
        <span className="">
          {formatDuration(duration.hour, "hour", "hours")}{" "}
          {formatDuration(duration.minute, "minute", "minutes")}
        </span>
      </div>

      <div>
        <h2 className="my-1 text-base lg:text-xl">How did you feel?</h2>
        <div className="flex max-w-full flex-wrap justify-around lg:max-w-[30vw]">
          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              required
              name="barometer"
              aria-label="Exhausted"
              value="1"
              checked={barometer === "1"}
              onChange={(e) => setBarometer(e.target.value)}
            />
            <span className="material-symbols-outlined form-baro baro-one">
              sentiment_very_dissatisfied
            </span>
            <span className="radio-label text-xs">Exhausted</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="barometer"
              aria-label="Tired"
              value="2"
              checked={barometer === "2"}
              onChange={(e) => setBarometer(e.target.value)}
            />
            <span className="material-symbols-outlined form-baro baro-two">
              sentiment_stressed
            </span>
            <span className="radio-label text-xs">Tired</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="barometer"
              aria-label="Okay"
              value="3"
              checked={barometer === "3"}
              onChange={(e) => setBarometer(e.target.value)}
            />
            <span className="material-symbols-outlined form-baro baro-three">
              sentiment_neutral
            </span>
            <span className="radio-label text-xs">Okay</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="barometer"
              aria-label="Fresh"
              value="4"
              checked={barometer === "4"}
              onChange={(e) => setBarometer(e.target.value)}
            />
            <span className="material-symbols-outlined form-baro baro-four">
              sentiment_content
            </span>
            <span className="radio-label text-xs">Fresh</span>
          </label>

          <label className="flex flex-col items-center">
            <input
              className="radio hidden"
              type="radio"
              name="barometer"
              aria-label="Energized"
              value="5"
              checked={barometer === "5"}
              onChange={(e) => setBarometer(e.target.value)}
            />
            <span className="material-symbols-outlined form-baro baro-five">
              sentiment_very_satisfied
            </span>
            <span className="radio-label text-xs">Energized</span>
          </label>
        </div>
      </div>

      <div className="flex w-full justify-stretch gap-2 py-2 lg:max-w-[30vw]">
        <button
          className="btn flex-auto"
          onClick={() => backToActivities("/activities")}
        >
          Cancel
        </button>
        <button className="btn btn-primary flex-auto" type="submit">
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}

ActivityForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  activityType: PropTypes.string.isRequired,
  setActivityType: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  setStartTime: PropTypes.func.isRequired,
  endTime: PropTypes.string.isRequired,
  setEndTime: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  duration: PropTypes.object.isRequired,
  setDuration: PropTypes.func.isRequired,
  barometer: PropTypes.string.isRequired,
  setBarometer: PropTypes.func.isRequired,
  formErrors: PropTypes.object.isRequired,
  submitButtonText: PropTypes.string,
};
