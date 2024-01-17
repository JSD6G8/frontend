import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import ListedCard from "./components/ListedCard";
import MainCard from "./components/MainCard";
import SelectorButton from "./components/SelectorButton";
import SortButton from "./components/SortButton";

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);

  const choicesData = [
    "All",
    "Running",
    "Cycling",
    "Swimming",
    "Hiking",
    "Walking",
    "Other",
  ];
  const [filterType, setFilterType] = useState(choicesData[0]);

  function filterTypeUpdate(value) {
    setFilterType(value);
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activities",
      );

      if (response.status === 200 && response.data) {
        setActivities([...response.data]);
      }
    };
    getData();
  }, [filterType, reload]);

  const sortedActivities = activities.sort(
    (a, b) => b.activityId - a.activityId,
  );

  return (
    <Layout>
      <div className="mt-3 justify-around lg:flex lg:flex-wrap">
        <div className="mx-3 mb-5 flex overflow-scroll">
          <SelectorButton
            choicesData={choicesData}
            selected={filterType}
            setResult={filterTypeUpdate}
          />
        </div>

        <div className="pb-2 pl-4 pr-4">
          {activities.map((a) => {
            return (
              <MainCard
                key={a.activityId}
                activity={a}
                reload={reload}
                setReload={setReload}
              />
            );
          })}
        </div>

        {sortedActivities.slice(1).map((activity) => {
          switch (filterType) {
            case "All":
              return <ListedCard key={activity.id} activities={activity} />;
            case "Running":
              if (activity.type === "Running") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
            case "Cycling":
              if (activity.type === "Cycling") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
            case "Swimming":
              if (activity.type === "Swimming") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
            case "Hiking":
              if (activity.type === "Hiking") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
            case "Walking":
              if (activity.type === "Walking") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
            case "Other":
              if (activity.type === "Other") {
                return <ListedCard key={activity.id} activities={activity} />;
              }
              break;
          }
        })}
      </div>
      <AddActivityBtn />
    </Layout>
  );
}

function AddActivityBtn() {
  return (
    <>
      <div className="fixed bottom-2 right-2 h-[5rem] w-[5rem]">
        <a href="/activities/create">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4601/4601618.png"
            alt="Add activity button"
          ></img>
        </a>
      </div>
    </>
  );
}

export default ActivityList;
