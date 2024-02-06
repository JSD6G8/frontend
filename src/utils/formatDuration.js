/**
 * @param {number} value - The value to format
 * @param {string} singular - The singular form of the unit
 * @param {string} plural - The plural form of the unit
 * @returns {string} The formatted duration
 * @description Formats a duration value with the correct unit
 * @example
 * formatDuration(1, "hour", "hours"); // "1 hour"
 * formatDuration(2, "hour", "hours"); // "2 hours"
 * formatDuration(1, "minute", "minutes"); // "1 minute"
 * formatDuration(2, "minute", "minutes"); // "2 minutes"
*/
const formatDuration = (value, singular, plural) => {
  if (!value) return "";
  return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
};

export default formatDuration;