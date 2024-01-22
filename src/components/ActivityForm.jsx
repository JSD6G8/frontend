import { useEffect } from "react";
import "./ActivityForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ActivityTypeLabel({
  activityType,
  setActivityType,
  type,
  icon,
  isRequired = false,
}) {
  return (
    <label className="flex flex-col items-center">
      <input
        className="radio hidden"
        {...(isRequired && { required: true })}
        type="radio"
        name="activityType"
        value={type}
        aria-label={type}
        checked={activityType === type}
        onChange={(e) => setActivityType(e.target.value)}
      />
      <span className="material-symbols-outlined form-icon">{icon}</span>
      <span className="radio-label text-xs">{type}</span>
    </label>
  );
}

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
    if (!value) return "";
    return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
  };

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
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Running"
            icon="sprint"
            isRequired={true}
          />
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Cycling"
            icon="directions_bike"
          />
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Swimming"
            icon="pool"
          />
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Walking"
            icon="directions_walk"
          />
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Hiking"
            icon="hiking"
          />
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Other"
            icon="self_improvement"
          />
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

      <div className="flex max-w-full items-center justify-around gap-2 lg:max-w-[30vw]">
        <div className="flex gap-1">
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
        <div className="flex flex-auto gap-1">
          <h2 className="text-base lg:text-xl">Duration:</h2>
          <span>
            {formatDuration(duration.hour, "hr", "hrs")}{" "}
            {formatDuration(duration.minute, "min", "mins")}
          </span>
        </div>
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
            <span className="radio-label text-xs">Very Weak</span>
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
            <span className="radio-label text-xs">Weak</span>
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
            <span className="radio-label text-xs">Normal</span>
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
            <span className="radio-label text-xs">Strong</span>
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
            <span className="radio-label text-xs">Very Strong</span>
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
