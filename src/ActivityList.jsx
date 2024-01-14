import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import ListedCard from "./components/ListedCard";
import MainCard from "./components/MainCard";
import SelectorButton from "./components/SelectorButton";

// TODO Link SelectorButton to be able to filtering by activity type
// TODO hidden MainCard and show onClick

// -----------------------------------//

function ActivityList() {
  const [activities, setActivities] = useState([]);

  const choicesData = ["All", "Running", "Swimming", "Hiking", "Walking"];
  const [filterType, setFilterType] = useState(choicesData[0]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activities"
      );

      if (response.status === 200 && response.data) {
        setActivities([...response.data]);
      }
    };
    getData();
  }, []);

  function filterTypeUpdate(value) {
    setFilterType(value);
  }

  return (
    <Layout>
      <div className="lg:flex lg:flex-wrap">
        <SelectorButton
          choicesData={choicesData}
          selected={filterType}
          setResult={filterTypeUpdate}
        />
        <h1>{filterType}</h1>

        <MainCard />

        {activities.map((a) => {
          return <ListedCard activities={a} />;
        })}
      </div>
      <AddActivityBtn />
    </Layout>
  );
}

function AddActivityBtn() {
  return (
    <>
      <div className="w-[5rem] h-[5rem] fixed right-2 bottom-2">
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
