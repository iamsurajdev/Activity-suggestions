import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h1 style={{ textAlign: "center" }}>Loading.....</h1>
      </div>
    </div>
  );
};

export default Spinner;
