import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import axios from "axios";
import Card from "./UI/Card/Card";
import Spinner from "./UI/Spinner/Spinner";

function App() {
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [participants, setParticipants] = useState("");

  const getActivity = () => {
    setActivity("");
    setType("");
    setLink("");
    setParticipants("");
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((result) => {
        setActivity(result.data.activity);
        const typeHelper = result.data.type;
        const typeHelperMax =
          typeHelper.charAt(0).toUpperCase() + typeHelper.slice(1);
        setType(typeHelperMax);
        setLink(result.data.link);
        setParticipants(result.data.participants);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div className={classes.App}>
      <h1>Activity suggestion</h1>
      {activity && (
        <Card
          activity={activity}
          type={type}
          reload={getActivity}
          link={link}
          participants={participants}
        />
      )}
      {!activity && <Spinner />}
    </div>
  );
}

export default App;
