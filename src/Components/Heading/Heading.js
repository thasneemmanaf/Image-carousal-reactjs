import React from "react";
import classes from "./Heading.module.css";

const Heading = (props) => {
  let headingHide = props.images.length > 0 ? classes.hideH1 : "";
  return (
    <h1 className={headingHide}>
      Let's make today <span>BEAUTIFUL</span> by <span>SEARCHING </span>
      something stunning...
    </h1>
  );
};

export default Heading;
