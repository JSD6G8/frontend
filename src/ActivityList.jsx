import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://659e13f647ae28b0bd3525fe.mockapi.io/loglife/v1/activity"
      );

      if (response.status === 200 && response.data) {
        setActivities([...response.data]);
      }
    };
    getData();
  }, []);

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <td>activityId</td>
            <td>title</td>
            <td>description</td>
            <td>type</td>
            <td>startTime</td>
            <td>endTime</td>
            <td>date</td>
            <td>barometer</td>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => {
            return (
              <tr key={a.activityId}>
                <td>{a.activityId}</td>
                <td>{a.title}</td>
                <td>{a.description}</td>
                <td>{a.type}</td>
                <td>{a.startTime}</td>
                <td>{a.endTime}</td>
                <td>{a.date}</td>
                <td>{a.barometer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

export default ActivityList;
