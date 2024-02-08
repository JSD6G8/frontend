import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import ListedCard from "./components/ListedCard";
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
    const userId = "65b8c301581f2faab26d412d"; //?? How'd we import the userId after the authenticatio?
    const getData = async () => {
      try {
        let typeQuery = filterType === "All" ? "" : filterType;
        const response = await axios.get(
          `https://jsd6-loglife-backend.onrender.com/activities/user/${userId}?type=${typeQuery}`,
        );

        if (response.status === 200 && response.data) {
          setActivities([...response.data]);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
  }, [filterType, reload]);

  return (
    <Layout>
      <main className="container mx-auto mb-3 mt-3 max-w-5xl px-2 xl:container md:mb-6 md:mt-6 md:flex md:flex-col md:items-center md:rounded-xl md:bg-white md:p-5 md:drop-shadow-md xl:mx-auto">
        <div className="flex-col max-md:w-full md:mb-5 md:self-stretch md:px-20">
          <div className="mb-5 mt-5 text-5xl font-semibold max-md:mx-3 md:text-left">
            Activities
          </div>
          <div className="flex justify-around md:justify-between">
            <div className="flex max-md:mx-3 max-md:overflow-scroll">
              <SelectorButton
                choicesData={choicesData}
                selected={filterType}
                setResult={filterTypeUpdate}
              />
            </div>
            <div className="flex-shrink-0">
              <SortButton />
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:place-items-center md:gap-x-3 md:gap-y-3 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-5 xl:gap-x-4">
          {activities.map((activity) => {
            switch (filterType) {
              case "All":
                return (
                  <ListedCard key={activity.activityId} activities={activity} />
                );
              case "Running":
                if (activity.type === "Running") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
              case "Cycling":
                if (activity.type === "Cycling") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
              case "Swimming":
                if (activity.type === "Swimming") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
              case "Hiking":
                if (activity.type === "Hiking") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
              case "Walking":
                if (activity.type === "Walking") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
              case "Other":
                if (activity.type === "Other") {
                  return (
                    <ListedCard
                      key={activity.activityId}
                      activities={activity}
                    />
                  );
                }
                break;
            }
          })}
        </div>
      </main>
    </Layout>
  );
}

export default ActivityList;
