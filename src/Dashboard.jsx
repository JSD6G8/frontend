import {
  BarChart,
  Card,
  DonutChart,
  Legend,
  LineChart,
  ProgressBar,
  ProgressCircle,
  Title,
} from "@tremor/react";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import WeeklyActiveDay from "./components/D_WeeklyActiveDay";

// Dictionary to convert month number to month name
const MONTH_NUM_TO_NAME = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const mock_barometer_data = {
//   "values": [ 60,40, 40, 100, 100, 60, 100,60, 40, 20, 60 ]
// }

// // Mock data for Trend
// const dataForMonthlyChart3= [
//   { name: "October", minute: 110 },
//   { name: "November", minute: 135 },
//   { name: "December", minute: 200 },
//   { name: "January", minute: 90 },
//   { name: "February", minute: 60 },
// ];

// // Mock data for ActivityDonut
// const dataForActivityDonut3 = [
//   { name: 'Running',  minutes: 200, },
//   { name: 'Cycling', minutes: 100, },
//   { name: 'Swimming', minutes: 30,},
//   { name: 'Hiking', minutes: 50, },
//   { name: 'Walking', minutes: 15, },
// ];

// // Mock data for weekly active day
// const lastTenDaysActiveList = [
//   { "date": "2024-02-11" },
//   { "date": "2024-02-12" },
//   { "date": "2024-02-13" },
//   { "date": "2024-02-14" },
//   { "date": "2024-02-15" }
// ]

//  {value : [x,x,x]} -> {value : [{Feeling:x},{Feeling:x},{Feeling:x}]}
//  add more to make it 15 days
const convertBaroToFeeling = (value) => {
  const feeling = [];
  const valueSize = value.values.length;
  const addMore = 15 - (valueSize + 1);
  if (addMore > 1) {
    for (let i = 0; i < addMore; i++) {
      let temp = {};
      temp["Feeling"] = 5;
      feeling.push(temp);
    }
  }
  value.values.map((v) => {
    let temp = {};
    temp["Feeling"] = v;
    feeling.push(temp);
  });
  return feeling;
};

// const chartdata = [
//   { Feeling: 5 },
//   { Feeling: 5 },
//   { Feeling: 20 },
//   { Feeling: 40 },
//   { Feeling: 60 },
//   { Feeling: 60 },
//   { Feeling: 100 },
// ];

// DIDN't USE check later for clean up
function prepareDataForMonthlyChart(data) {
  let preparedData = [];
  // Add check data is not empty and prepare solution for empty data
  data.map((monthlyData) => {
    // Weak position here to convert month number to month name
    let dataForPush = {
      name: MONTH_NUM_TO_NAME[
        Number(String(monthlyData.month).slice(4, 6)) - 1
      ],
      minute: monthlyData.sum_time,
    };
    preparedData.push(dataForPush);
  });
  return preparedData;
}

//  call this function after get data from backend
//  can set return data to State and use State at compponet to render
function prepareDataForProgress(data) {
  let thisMonthMinutes = data["sum_minutes"] ? data["sum_minutes"] : 0;
  let daysInCurrentMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();
  const minutesMontlyGoal =
    30 * (daysInCurrentMonth > 0 ? daysInCurrentMonth : 1);
  const dataForProgress = {};
  dataForProgress["target"] = minutesMontlyGoal;
  dataForProgress["actual"] = thisMonthMinutes;
  if (thisMonthMinutes === 0) {
    dataForProgress["percentage"] = 0;
  } else {
    dataForProgress["percentage"] = Math.round(
      (thisMonthMinutes / minutesMontlyGoal) * 100,
    );
  }
  let remainMinute = minutesMontlyGoal - thisMonthMinutes;
  dataForProgress["remain"] = remainMinute > 0 ? remainMinute : 0;
  return dataForProgress;
}

//  call this function after get data from backend
//  can set return data to State and use State at compponet to render
function prepareDataActivitiesDonut(data) {
  // NEXT STEP 1 -> create this function
  // const trimmedActivity = activityName.replace(/^sum_|_mins$/g, '');
  // Capitalize the first letter of the trimmed activity name
  // const capitalizedActivity = trimmedActivity.charAt(0).toUpperCase() + trimmedActivity.slice(1);

  const dataForDonutChart = {};
  const keys = Object.keys(data);
  dataForDonutChart["data"] = [];
  dataForDonutChart["legend"] = [];
  keys.map((key) => {
    if (key.startsWith("sum_") && key.endsWith("_mins")) {
      // Trim start,end and convert to capitalized
      const trimmedActivity = key.replace(/^sum_|_mins$/g, "");
      // Capitalize the first letter of the trimmed activity name
      const capitalizedActivity =
        trimmedActivity.charAt(0).toUpperCase() + trimmedActivity.slice(1);
      dataForDonutChart.data.push({
        name: capitalizedActivity,
        minutes: data[key],
      });
      dataForDonutChart.legend.push(capitalizedActivity);
    }
  });
  return dataForDonutChart;
}

// RENDER HERE
function Dashboard() {
  const [dataForMonthlyChart, setdataForMonthlyChart] = useState([]);
  const [dataForActivitiesDonut, setdataForDonutChart] = useState([]);
  const [dataForProgress, setdataForProgress] = useState([]);
  const [dataForWeeklyActive, setdataForWeeklyActive] = useState([]);
  const [dataForFeeling, setdataForFeeling] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // Step 1: Fetch data from the backend
        axios.defaults.withCredentials = true;
        const response = await axios.get("https://api.loglife.guru/dashboard", {
          withCredentials: true,
        });

        if (response.status === 200 && response.data) {
          // NEXT STEP 2-> processing data and set to state
          setdataForMonthlyChart(response.data.data_for_monthly_chart);
          setdataForDonutChart(prepareDataActivitiesDonut(response.data));
          setdataForProgress(prepareDataForProgress(response.data));
          setdataForWeeklyActive(response.data.data_for_last_ten_days);
          setdataForFeeling(
            convertBaroToFeeling(response.data.data_for_barometer_chart[0]),
          );
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto xl:container max-md:p-5 md:my-3 md:rounded-xl md:bg-white md:p-5 md:drop-shadow-md xl:mx-auto">
        <div className="text-5xl font-semibold md:my-5 md:text-left">
          Dashboard
        </div>
        <div className="grid-cols-2 gap-x-3 md:grid xl:grid-cols-3 xl:gap-x-2">
          <Card className="mx-auto mt-4 max-w-lg hover:bg-base-100">
            <Title className="mb-3">Your Monthly Progress</Title>
            <p className="flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              <span>
                {dataForProgress.actual} / {dataForProgress.target} mins &bull;{" "}
                {dataForProgress.percentage}%
              </span>
              <span>{dataForProgress.remain} mins more to be healthy</span>
            </p>
            <ProgressBar
              className="mt-3"
              value={(dataForProgress.actual / dataForProgress.target) * 100}
              color="teal"
              showAnimation={true}
            />
          </Card>
          <Card className="mx-auto mt-4 max-w-lg hover:bg-base-100">
            <Title>Day Logged This Week</Title>
            <div className="mx-auto mt-2 flex max-w-lg justify-between">
              <WeeklyActiveDay data={dataForWeeklyActive} />
            </div>
          </Card>
          <Card className="mx-auto mt-4 max-w-lg hover:bg-base-100">
            <Title className="mb-3">Activity Type</Title>
            <div className="mt-0 flex">
              <DonutChart
                data={dataForActivitiesDonut.data}
                category="minutes"
                index="name"
                colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
                onValueChange={(v) => setValue(v)}
              />
              <Legend
                categories={[
                  "Running",
                  "Cycling",
                  "Swimming",
                  "Hiking",
                  "Walking",
                ]}
                // categories={dataForActivitiesDonut.legend}
                // #BUG HERE cannot use array of active activity to show legend
                //  --> i can display properly when change code but fail when refresh
                // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="mt-2 max-w-xs"
              />
            </div>
          </Card>

          <Card className="mx-auto mt-4 max-w-lg hover:bg-base-100">
            <Title className="mb-0">Monthly Trend</Title>
            <BarChart
              className="mt-0"
              data={dataForMonthlyChart}
              index="name"
              categories={["minute"]}
              colors={["blue"]}
              showAnimation={true}
              animationDuration={2000}
            />
          </Card>

          <Card className="mx-auto my-4 max-w-lg hover:bg-base-100">
            <Title className="mb-0">How's Your Feeling So Far?</Title>
            <span className="mt-0 flex flex-row-reverse text-3xl">😁</span>
            <LineChart
              className="mb-0 mt-0 h-72"
              data={dataForFeeling}
              categories={["Feeling"]}
              colors={["blue"]}
              yAxisWidth={30}
              showAnimation={true}
              showYAxis={false}
              maxValue={110}
              showLegend={false}
              showTooltip={false}
              enableLegendSlider={false}
              tickGap={100}
              animationDuration={2000}
            />
            <span className="mt-0 text-3xl">😫</span>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
