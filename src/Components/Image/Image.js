import React, { useState } from "react";
import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <img
      className={classes.image}
      src={props.url}
      alt="image"
      onClick={() => props.openModal(props.url, props.id)}
    />
  );
};

export default Image;
