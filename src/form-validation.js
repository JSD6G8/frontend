const validateForm = (startTime, endTime, setFormErrors) => {
  let errors = {};
  let isValid = true;

  if (startTime === endTime) {
    errors.time = "Start time and end time cannot be the same.";
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export default validateForm;