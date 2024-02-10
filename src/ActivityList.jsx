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

  const [orderType, setOrderType] = useState("");

  function filterTypeUpdate(value) {
    setFilterType(value);
  }

  function filterOrderUpdate(value) {
    setOrderType(value);
  }

  useEffect(() => {
    const userId = "65b8c301581f2faab26d412d"; //?? How'd we import the userId after the authentication?
    const getData = async () => {
      try {
        let typeQuery = filterType === "All" ? "" : filterType;
        const response = await axios.get(
          `https://jsd6-loglife-backend.onrender.com/activities/user/${userId}?type=${typeQuery}&sort=${orderType}`,
        );

        if (response.status === 200 && response.data) {
          setActivities([...response.data]);
          setReload(true);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
  }, [filterType, orderType, reload]);

  return (
    <Layout>
      <main className="container mx-auto mb-6 mt-6 xl:container md:flex md:flex-col md:items-center md:rounded-xl md:bg-white md:p-5 md:drop-shadow-md xl:mx-auto">
        <div className="flex flex-col max-md:w-full max-sm:px-2 md:mb-5 md:self-stretch md:px-20">
          <div className="mx-3 mb-3 text-5xl font-semibold md:mt-3 md:text-left">
            Activities
          </div>
          <div className="mx-3 flex justify-between">
            <div className="flex max-md:overflow-scroll">
              <SelectorButton
                choicesData={choicesData}
                selected={filterType}
                setResult={filterTypeUpdate}
              />
            </div>
            <SortButton selected={orderType} setResult={filterOrderUpdate} />
          </div>
        </div>
        {reload ? (
          <div className="flex flex-col max-md:mt-3">
            <div className="flex-auto self-center md:grid md:grid-cols-2 md:place-items-center md:gap-x-3 md:gap-y-3 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-4 xl:gap-x-4">
              {activities.map((activity) => {
                switch (filterType) {
                  case "All":
                    return (
                      <ListedCard
                        key={activity.activityId}
                        activities={activity}
                      />
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
          </div>
        ) : (
          <>
            <div className="container mx-auto px-3 max-md:mt-3 md:h-screen">
              <div className="skeleton h-screen w-full "></div>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}

export default ActivityList;
