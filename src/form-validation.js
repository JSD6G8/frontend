const validateForm = (startTime, endTime, setFormErrors) => {
  let errors = {};
  let isValid = true;

  if (startTime === endTime) {
    errors.time = "Start and End can't be equal."
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export default validateForm;