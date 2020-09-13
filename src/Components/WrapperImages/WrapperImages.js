import React from "react";
import classes from "./WrapperImages.module.css";

const WrapperImages = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default WrapperImages;
