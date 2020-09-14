import React from "react";
import classes from "./WrapperImages.module.css";

// To wrap all the fetched images to align within grid
const WrapperImages = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default WrapperImages;
