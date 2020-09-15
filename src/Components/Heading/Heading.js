import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  let heading = (
    <h1>
      Let's make today beautiful by{" "}
      <span className={classes.bold}>SEARCHING </span>
      something stunning...
    </h1>
  );

  let errorMessage = (
    <h2>
      There are no search results.Please try something meaningful and
      beautiful...
    </h2>
  );

  return (
    <React.Fragment>
      {!props.images.length > 0 && !props.showError && heading}
      {props.showError && errorMessage}
    </React.Fragment>
  );
};

export default Heading;
