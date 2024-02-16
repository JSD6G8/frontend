import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ProgressCircle, Legend, Title, BarChart,ProgressBar,LineChart } from "@tremor/react";
import { DonutChart } from "@tremor/react";
import React from "react";
import Layout from "./Layout";

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

const dataForMonthlyChart = [
  { name: "October", minute: 110 },
  { name: "November", minute: 135 },
  { name: "December", minute: 200 },
  { name: "January", minute: 90 },
  { name: "February", minute: 60 },
];

const dataForActivityDonut = [
  { name: 'Running',  minutes: 200, },
  { name: 'Cycling', minutes: 100, },
  { name: 'Swimming', minutes: 30,},
  { name: 'Hiking', minutes: 50, },
  { name: 'Walking', minutes: 15, },
];

const choicesData = [
  "All",
  "Running",
  "Cycling",
  "Swimming",
  "Hiking",
  "Walking",
  "Other",
];

const chartdata = [
  { Running: 5, },
  { Running: 5, },
  { Running: 20, },
  { Running: 40, },
  { Running: 60, },
  { Running: 60, },
  { Running: 100, },
];

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

function prepareDataForDonutChart() {
  // NEXT STEP 1 -> create this function
}

function Dashboard() {
  const [dataForMonthlyChart3, setdataForMonthlyChart] = useState([]);
  // const [value, setValue] = React.useState<EventProps>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          "https://jsd6-loglife-backend.onrender.com/dashboard",
          {
            // "http://localhost:3000/dashboard",{
            withCredentials: true,
          },
        );

        if (response.status === 200 && response.data) {
          console.log("response.data", response.data);
          // setdataForMonthlyChart(prepareDataForMonthlyChart(response.data))
          setdataForMonthlyChart(response.data.data_for_monthly_chart);
          // NEXT STEP 2->
          // setdataForDutyChart(prepareDataForDonutChart(response.data))
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
    console.log("run here");
  }, []);
  console.log("run here outside useEffect");
  return (
    <Layout>
      <Card className="mx-auto max-w-lg mt-4">
          <Title className="mb-3">Your progress</Title>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
            <span>270/870 mins &bull; 45%</span>
            <span>500mins more to be healthy</span>
          </p>
          <ProgressBar  className="mt-3"
            value={45}
            // label="45%"
            color="teal"
            showAnimation={true}
            animationDuration = {2000}
             />
          
        </Card>

        <Card className="flex justify-between mx-auto mt-4 max-w-lg p-4" >
            {/* <div className="flex justify-start space-x-7 items-center content-center"> */}
            {/* <Title className="mb-3">This week</Title> */}
            
              <ProgressCircle value={100} size="sm" color="red" showAnimation={true}>
                <span className="text-xs font-medium text-slate-700">S</span>
              </ProgressCircle>
              <ProgressCircle value={0} size="sm" color="yellow">
                <span className="text-xs font-medium text-slate-300">M</span>
              </ProgressCircle>
              <ProgressCircle value={100} size="sm" color="pink">
                <span className="text-xs font-medium text-slate-700">T</span>
              </ProgressCircle>
              <ProgressCircle value={0} size="sm" color="green">
                <span className="text-xs font-medium text-slate-300">W</span>
              </ProgressCircle>
              <ProgressCircle value={100} size="sm" color="orange">
                <span className="text-xs font-medium text-slate-700">T</span>
              </ProgressCircle>
              <ProgressCircle value={100} size="sm" color="blue">
                <span className="text-xs font-medium text-slate-700">F</span>
              </ProgressCircle>
              <ProgressCircle value={100} size="sm" color="violet">
                <span className="text-xs font-medium text-slate-700">S</span>
              </ProgressCircle>
          
        </Card>
        <Card className="mx-auto mt-4 max-w-lg">
        <Title className="mb-3">Activities</Title>
        <div className="flex mt-0">
          <DonutChart
            data={dataForActivityDonut}
            category="minutes"
            index="name"
            // valueFormatter={valueFormatter}
            yAxisWidth={30}
            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
            onValueChange={(v) => setValue(v)}
          />
          <Legend
              categories={['Running', 'Cycling', 'Swimming', 'Hiking', 'Walking']}
              colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
              className="max-w-xs mt-2"
            />
        </div>
    {/* <CodeBlock source={JSON.stringify(value, null, 2)} variant="empty" className="mt-8" /> */}
    </Card>
      <Card className="mx-auto mt-4 max-w-lg">
      <Title className="mb-0">Trend</Title>
      <BarChart
        className="mt-0"
        data={dataForMonthlyChart}
        // data={dataForMonthlyChart3}
        index="name"
        categories={['minute']}
        colors={['blue']}
        showAnimation={true}
        animationDuration = {2000}
      />
    </Card>
    <Card className="mx-auto mt-4 max-w-lg ">
      <Title className="mb-0">Barometer</Title>
      <span className="mt-0 text-3xl flex flex-row-reverse" >😁</span>
      <LineChart
        className="mt-0 mb-0 h-72"
        data={chartdata}
        index="date"
        categories={['Running']}
        colors={['blue']}
        yAxisWidth={30}
        showAnimation={true}
        showYAxis={false}
        maxValue={110}
        showLegend={false}
        showTooltip={false}
        enableLegendSlider={false}
        tickGap={100}
        animationDuration = {2000}
        // customTooltip={customTooltip}
      />
      <span className="mt-0 text-3xl" >😫</span>
    </Card>
    </Layout>
  );
}

export default Dashboard;
