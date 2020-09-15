import React from "react";
import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <img
      className={classes.image}
      src={props.url}
      alt="not found"
      onClick={() => props.openModal(props.index, props.url)}
    />
  );
};

export default Image;
