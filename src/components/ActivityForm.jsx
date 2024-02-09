import { useEffect } from "react";
import "./ActivityForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import formatDuration from "../utils/formatDuration";

function ActivityTypeLabel({ activityType, setActivityType, type, icon }) {
  return (
    <label className="group flex cursor-pointer flex-col items-center rounded bg-base-200 p-2 hover:bg-base-300 has-[:checked]:bg-primary">
      <input
        className="peer hidden"
        required
        type="radio"
        name="activityType"
        value={type}
        aria-label={type}
        checked={activityType === type}
        onChange={(e) => setActivityType(e.target.value)}
      />
      <span className="material-symbols-outlined select-none text-7xl text-base-300 group-hover:text-base-200 peer-checked:text-base-100">
        {icon}
      </span>
      <span className="radio-label select-none peer-checked:text-base-100">
        {type}
      </span>
    </label>
  );
}

function BarometerLabel({
  barometer,
  setBarometer,
  label,
  barometerValue,
  icon,
}) {
  return (
    <label className="flex cursor-pointer flex-col items-center">
      <input
        className="peer radio hidden"
        type="radio"
        required
        name="barometer"
        aria-label={label}
        value={barometerValue}
        checked={barometer === barometerValue}
        onChange={(e) => setBarometer(e.target.value)}
      />
      <span className="material-symbols-outlined select-none text-5xl text-base-200 peer-checked:text-base-content">
        {icon}
      </span>
      <span className="radio-label select-none">{label}</span>
    </label>
  );
}

export default function ActivityForm({
  formHeading = "Create Activity",
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
  const navigate = useNavigate();
  const barometerColor = {
    1: "bg-info",
    2: "bg-success",
    3: "bg-warning",
    4: "bg-error",
    5: "bg-power",
  };
  const barometerColorClass = barometerColor[barometer];

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

  return (
    <form
      className="flex h-full flex-col justify-between gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl md:text-3xl">{formHeading}</h1>
      <fieldset>
        <h2 className="text-base md:text-xl">Activity Title</h2>
        <input
          className="input input-bordered w-full text-sm"
          type="text"
          placeholder={activityType + " (default)"}
          value={title}
          aria-label="Activity Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <h2 className="text-base md:text-xl">Description</h2>
        <textarea
          className="text-sn textarea textarea-bordered w-full resize-none"
          placeholder="Notes for anything (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </fieldset>

      <fieldset>
        <h2 className="text-base md:text-xl">Activity Type</h2>

        <div className="grid max-w-full grid-cols-3 justify-around gap-2">
          <ActivityTypeLabel
            activityType={activityType}
            setActivityType={setActivityType}
            type="Running"
            icon="sprint"
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
            icon="timer"
          />
        </div>
      </fieldset>

      <fieldset className="flex max-w-full items-center gap-2">
        <h2 className="text-base md:text-xl">Date:</h2>
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
      </fieldset>

      <fieldset className="flex max-w-full flex-col justify-around">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-base md:text-xl">From:</h2>
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
          <span className="text-base md:text-xl">to:</span>
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
        <span className="text-red-500">
          {duration.hour === 0 && duration.minute === 0 ? formErrors.time : ""}
        </span>
      </fieldset>

      <fieldset className="flex gap-1">
        <h2 className="text-base md:text-xl">Duration:</h2>
        <span className="text-base md:text-xl">
          {formatDuration(duration.hour, "hour", "hours")}{" "}
          {formatDuration(duration.minute, "minute", "minutes")}
        </span>
      </fieldset>

      <fieldset>
        <div className="flex flex-row items-center">
          <h2 className="text-base md:text-xl">How did you feel?</h2>
          <div
            className={`mx-2 h-2 flex-auto rounded ${barometerColorClass}`}
          ></div>
        </div>
        <div className="flex max-w-full flex-wrap justify-around">
          <BarometerLabel
            barometer={barometer}
            setBarometer={setBarometer}
            icon="sentiment_very_dissatisfied"
            label="Very Weak"
            barometerValue="1"
          />
          <BarometerLabel
            barometer={barometer}
            setBarometer={setBarometer}
            icon="sentiment_stressed"
            label="Weak"
            barometerValue="2"
          />
          <BarometerLabel
            barometer={barometer}
            setBarometer={setBarometer}
            icon="sentiment_neutral"
            label="Normal"
            barometerValue="3"
          />
          <BarometerLabel
            barometer={barometer}
            setBarometer={setBarometer}
            icon="sentiment_content"
            label="Strong"
            barometerValue="4"
          />
          <BarometerLabel
            barometer={barometer}
            setBarometer={setBarometer}
            icon="sentiment_very_satisfied"
            label="Very Strong"
            barometerValue="5"
          />
        </div>
      </fieldset>

      <div className="flex w-full justify-stretch gap-2 py-2">
        <button
          className="btn flex-auto"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1)}
          }
        >
          Cancel
        </button>
        <button
          className="btn btn-primary flex-auto text-base-100"
          type="submit"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}

ActivityTypeLabel.propTypes = {
  activityType: PropTypes.string.isRequired,
  setActivityType: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

BarometerLabel.propTypes = {
  barometer: PropTypes.string.isRequired,
  setBarometer: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  barometerValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

ActivityForm.propTypes = {
  formHeading: PropTypes.string,
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
