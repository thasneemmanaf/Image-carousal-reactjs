import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  let headingHide = props.images.length > 0 ? classes.hideH1 : "";
  let errorMessage = "";
  let heading = (
    <h1 className={headingHide}>
      Let's make today beautiful by <span>SEARCHING </span>
      something stunning...
    </h1>
  );

  if (props.showError) {
    errorMessage = (
      <h2>
        There are no search results.Please try something meaningful and
        beautiful...
      </h2>
    );
    heading = "";
  }

  return (
    <React.Fragment>
      {heading}
      {errorMessage}
    </React.Fragment>
  );
};

export default Heading;
