import React, { useState } from "react";
import { Card, ProgressCircle } from "@tremor/react";

function getCurrentWeekStartingFromSunday() {
  const today = new Date();
  const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Calculate the date of the Sunday of the current week
  const sundayDate = new Date(today.toISOString().slice(0, 10));
  sundayDate.setDate(today.getDate() - currentDay);

  // Initialize an array to store the dates of the current week
  const dates = [];

  // Loop through the days of the week and add them to the array
  for (let i = 0; i < 7; i++) {
      const date = new Date(sundayDate);
      date.setDate(sundayDate.getDate() + i);
      dates.push(date.toISOString().slice(0, 10)); // Format as "YYYY-MM-DD"
  }

  return dates;
}

const WeeklyActiveDay = ({ data }) => {

  const dataForDisplay = []
  // Get last 7 days DATE list array to Display  ["2024-01-01","2024-01-02"...]
  let dateListForDisplay = getCurrentWeekStartingFromSunday()
  
  const arrayOfActiveDate = []
  // Convert object array to string array (easy to check inside data)
  data.map((element) => {  arrayOfActiveDate.push(element.date) })
  
  // Run through DATE list and check if that date is in the lastTenDaysActiveList
  // Set ProgressCircle value ON spec
  dateListForDisplay.map((element) => {
      // Check if the date is in the arrayOfActiveDate
      if( arrayOfActiveDate.includes(element) ){
        // Set ProgressCircle value ON spec
        let parameter = {}
        parameter["value"] = 100
        parameter["spanSytle"] = "text-xs font-medium text-slate-700"
        dataForDisplay.push(parameter)
      }
      else {
        // Set ProgressCircle value OFF spec
        let parameter = {}
        parameter["value"] = 0
        parameter["spanSytle"] = "text-xs font-medium text-slate-300"
        dataForDisplay.push(parameter)
      }
  })

  return (
    <>
      <ProgressCircle value={dataForDisplay[0].value} size="sm" color="red" >
        <span className={dataForDisplay[0].spanSytle} >S</span>
      </ProgressCircle>
       <ProgressCircle value={dataForDisplay[1].value} size="sm" color="yellow">
        <span className={dataForDisplay[1].spanSytle}>M</span>
      </ProgressCircle>
     <ProgressCircle value={dataForDisplay[2].value} size="sm" color="pink">
        <span className={dataForDisplay[2].spanSytle}>T</span>
      </ProgressCircle>
      <ProgressCircle value={dataForDisplay[3].value} size="sm" color="green">
        <span className={dataForDisplay[3].spanSytle}>W</span>
      </ProgressCircle>
      <ProgressCircle value={dataForDisplay[4].value} size="sm" color="orange">
        <span className={dataForDisplay[4].spanSytle}>T</span>
      </ProgressCircle>
      <ProgressCircle value={dataForDisplay[5].value} size="sm" color="blue">
        <span className={dataForDisplay[5].spanSytle}>F</span>
      </ProgressCircle>
      <ProgressCircle value={dataForDisplay[6].value} size="sm" color="violet">
        <span className={dataForDisplay[6].spanSytle}>S</span>
      </ProgressCircle>
    </>
  );
};

export default WeeklyActiveDay

// function handleClick(value) {
//   setSelectedChoice(value);
//   setResult(value);
// }

// const buttonGroup = choicesData.map((data) => (
//   <button
//     className={`join-item btn-sm ${
//       data === selected
//         ? "btn btn-accent text-neutral"
//         : "hover:text btn btn-outline btn-accent"
//     }`}
//     onClick={() => {
//       handleClick(data);
//     }}
//     key={data}
//   >
//     {data}
//   </button>
// ));