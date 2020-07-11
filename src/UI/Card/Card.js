import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.cardDiv}>
        {props.activity && (
          <div className={classes.activityDiv}>
            <p>
              <strong>You can </strong> <br /> {props.activity}
            </p>
          </div>
        )}
        {props.type && (
          <div className={classes.typeDiv}>
            <p>
              {" "}
              <strong>Type:</strong> {props.type}
            </p>
          </div>
        )}
        {props.link && (
          <div className={classes.linkDiv}>
            <p>
              {" "}
              <strong>Type:</strong>{" "}
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </p>
          </div>
        )}
        {props.participants && (
          <div className={classes.participantsDiv}>
            <p>
              {" "}
              <strong>Participants: </strong> {props.participants}
            </p>
          </div>
        )}
        <div className={classes.reloadButton}>
          <button onClick={props.reload}>Not Satisfied..!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
