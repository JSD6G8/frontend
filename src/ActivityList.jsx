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
    const userId = "65b8c301581f2faab26d412d"; //?? How'd we import the userId after the authenticatio?
    const getData = async () => {
      const response = await axios.get(
        `https://jsd6-loglife-backend.onrender.com/activities/user/${userId}`,
      );

      if (response.status === 200 && response.data) {
        setActivities([...response.data]);
      }
    };
    getData();
    console.log(activities);
  }, [filterType, reload]);

  return (
    <Layout>
      <main className="container mx-auto mt-3 max-w-5xl px-2  md:mt-4 md:flex md:flex-col md:items-center md:rounded-xl md:bg-white md:drop-shadow-md">
        <h1 className="mx-3 my-2 text-4xl font-extrabold">Activities</h1>
        <div className="flex justify-around">
          <div className="mx-3 flex max-md:overflow-scroll">
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

        <div className="md:grid md:grid-cols-2 md:place-items-center md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* If the sorted data already sent from GET, change this to activities.slice(1)... */}
          {activities.map((activity) => {
            switch (filterType) {
              case "All":
                return <ListedCard key={activity._id} activities={activity} />;
              case "Running":
                if (activity.type === "Running") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
              case "Cycling":
                if (activity.type === "Cycling") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
              case "Swimming":
                if (activity.type === "Swimming") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
              case "Hiking":
                if (activity.type === "Hiking") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
              case "Walking":
                if (activity.type === "Walking") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
              case "Other":
                if (activity.type === "Other") {
                  return (
                    <ListedCard key={activity._id} activities={activity} />
                  );
                }
                break;
            }
          })}
          <AddActivityBtn />
        </div>
      </main>
    </Layout>
  );
}

function AddActivityBtn() {
  return (
    <>
      <div className="fixed bottom-2 right-2 xl:left-3/4 ">
        <a href="/activities/create">
          <img
            className="h-[5rem] w-[5rem] transition duration-300 ease-in-out hover:scale-110"
            src="https://cdn-icons-png.flaticon.com/512/4601/4601618.png"
            alt="Add activity button"
          ></img>
        </a>
      </div>
    </>
  );
}

export default ActivityList;
