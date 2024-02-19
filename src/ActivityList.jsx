import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "./Layout";
import ListedCard from "./components/ListedCard";
import SelectorButton from "./components/SelectorButton";
import SortButton from "./components/SortButton";

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);
  const [notEmpty, setNotEmpty] = useState(false);
  const [hasmore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(10);
  const [take, setTake] = useState(10);

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
  let typeQuery = filterType === "All" ? "" : filterType;

  const [orderType, setOrderType] = useState("");

  function filterTypeUpdate(value) {
    setFilterType(value);
    setSkip(10);
  }

  function filterOrderUpdate(value) {
    setOrderType(value);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.loglife.guru/v2/activities/user/me?type=${typeQuery}&sort=${orderType}&take=${take}`,
          {
            withCredentials: true,
          },
        );

        if (response.status === 200 && response.data) {
          setActivities([...response.data]);
          setReload(true);
          setNotEmpty(true);
        }
        if (response.status === 200 && response.data.length === 0) {
          setNotEmpty(false);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getData();
  }, [filterType, orderType, reload, notEmpty]);

  const fetchMoreData = () => {
    axios
      .get(
        `https://api.loglife.guru/v2/activities/user/me?type=${typeQuery}&sort=${orderType}&skip=${skip}&take=5`,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        setActivities((prevActivities) => [...prevActivities, ...res.data]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setSkip((prevSkip) => prevSkip + 5);
    setTake((prevTake) => prevTake + skip);
  };

  return (
    <Layout>
      <main className="container mx-auto xl:container max-md:p-5 md:my-3 md:h-max md:rounded-xl md:bg-white md:p-5 md:drop-shadow-md xl:mx-auto">
        <div className="flex flex-col max-md:w-full md:mb-5">
          <div className="text-5xl font-semibold max-sm:mb-2 md:my-5 md:text-left">
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
          notEmpty ? (
            <InfiniteScroll
              dataLength={activities.length}
              next={fetchMoreData}
              hasMore={hasmore}
              loader={
                <div className="mt-1 flex justify-center md:mt-4">
                  <p className="loading loading-ring loading-lg"></p>
                </div>
              }
              endMessage={
                <p className="text-md mt-2 text-center font-semibold md:mt-4">
                  🎉 All activities have been loaded! 🎉
                </p>
              }
            >
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
            </InfiniteScroll>
          ) : (
            <div className="m-5 flex h-full flex-col justify-center self-center">
              <p className=" self-center text-center text-xl font-medium">
                Newcomer?
              </p>
              <p className=" self-center text-center text-xl font-semibold">
                Let's log your first activity! 👇🏼
              </p>
              <br></br>
              <div className="place-content-center-2 btn btn-primary h-12 w-56 self-center text-[1rem] tracking-wide  text-white hover:bg-[#1357B8] md:px-[6px] md:py-[1px]">
                <a href="/activities/create">
                  <div className="flex">
                    <span className="material-symbols-outlined text-3xl font-bold md:self-center">
                      add
                    </span>
                    <p className="self-center text-base font-semibold md:inline-block md:p-1">
                      Add Activity
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )
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
