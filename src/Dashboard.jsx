import axios from "axios";
import { useEffect, useState } from "react";
import { Card,ProgressCircle,Legend,Title,BarChart} from '@tremor/react';
import { DonutChart } from '@tremor/react';
import React from 'react';
import Layout from "./Layout";

const MONTH_NUM_TO_NAME = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dataForMonthlyChart = [
  { name: 'October', 'minute': 110, },
  { name: 'November', 'minute': 135, },
  { name: 'December', 'minute': 200, },
  { name: 'January', 'minute': 90, },
  { name: 'February', 'minute': 60, },
];
const dataForMonthlyChart2 = []
// const valueFormatter = (number : number) =>
//   `$ ${Intl.NumberFormat('us').format(number).toString()}`;

const dataForActivityDonut = [
  { name: 'Running',  minutes: 980, },
  { name: 'Cycling', minutes: 456, },
  { name: 'Swimming', minutes: 390,},
  { name: 'Hiking', minutes: 240, },
  { name: 'Walking', minutes: 190, },
];

// const [filterType, setFilterType] = useState(choicesData[0]);
const choicesData = [
  "All",
  "Running",
  "Cycling",
  "Swimming",
  "Hiking",
  "Walking",
  "Other",
];

function prepareDataForMonthlyChart(data) {
  let preparedData = []
  // Add check data is not empty and prepare solution for empty data
  data.map( monthlyData => {
            // Weak position here to convert month number to month name
            let dataForPush  = {name : MONTH_NUM_TO_NAME[ Number( String(monthlyData.month).slice(4,6)) - 1 ]
                                , minute : monthlyData.sum_time}
            preparedData.push(dataForPush)
          })
  return preparedData
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
        const response = await axios.get(
          `http://127.0.0.1:3001/data2`,
        );

        if (response.status === 200 && response.data) {
          console.log("response.data", response.data)
          // setdataForMonthlyChart(prepareDataForMonthlyChart(response.data))
          setdataForMonthlyChart(response.data.data_for_monthly_chart)
          // NEXT STEP 2-> 
          // setdataForDutyChart(prepareDataForDonutChart(response.data))
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
    console.log("run here")
  }, []);
  console.log("run here outside useEffect")
  return (
    <Layout>
        <Card className="mx-auto max-w-md">
          <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Sales
          </h4>
          <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            $71,465
          </p>
          {/* <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <span>32% of annual target</span>
            <span>$225,000</span>
          </p> */}
          {/* <ProgressBar value={32} className="mt-2" /> */}
        </Card>
        <Card className="mx-auto max-w-sm">
          <div className="space-x-48">
            <div className="flex justify-start space-x-5 items-center">
              <ProgressCircle value={75} size="md">
                <span className="text-xs font-medium text-slate-700">75%</span>
              </ProgressCircle>
              <ProgressCircle value={75} size="md">
                <span className="text-xs font-medium text-slate-700">75%</span>
              </ProgressCircle>
              <ProgressCircle value={40} size="md">
                <span className="text-xs font-medium text-slate-700">40%</span>
              </ProgressCircle>
              {/* { <div>
                <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                  340/450 (75%)
                </p>
                
              </div> } */}
            </div>
          </div>
        </Card>
      <Card className="mx-auto max-w-md">
        <Title className="mb-4">Activities</Title>
        <DonutChart
        data={dataForActivityDonut}
        category="minutes"
        index="name"
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />
      <Legend
          categories={['Running', 'Cycling', 'Swimming', 'Hiking', 'Walking']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
    {/* <CodeBlock source={JSON.stringify(value, null, 2)} variant="empty" className="mt-8" /> */}
    </Card>
    <Card>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Activities
      </h3>
      <BarChart
        className="mt-6"
        data={dataForMonthlyChart3}
        index="name"
        categories={['minute']}
        colors={['blue']}
        yAxisWidth={32}
      />
    </Card>
    </Layout>
  )
}

export default App
