import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "./Layout";
import ListedCard from "./components/ListedCard";
import SelectorButton from "./components/SelectorButton";
import SortButton from "./components/SortButton";
import { useAuth } from "./providers/authProvider";

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);
  const [hasmore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(10);
  const [take, setTake] = useState(10);
  const { user } = useAuth();

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
          `https://api.loglife.guru/v2/activities/user/me?type=${typeQuery}&sort=${orderType}&take=${take}`, {
            withCredentials: true,
          }
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

  const fetchMoreData = () => {
    axios
      .get(
        `https://api.loglife.guru/activities/user/${user.userId}?type=${typeQuery}&sort=${orderType}&skip=${skip}&take=5`, {
          withCredentials: true,
        }
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
