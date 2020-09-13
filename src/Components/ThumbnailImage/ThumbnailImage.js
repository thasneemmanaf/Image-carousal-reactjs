import React from "react";
import classes from "./ThumbnailImage.module.css";

const ThumbnailImage = (props) => {
  let MainImageindex = props.currentModalImage.index;
  let ArrayLength = props.images.length;
  let smallImageIndex;

  if (MainImageindex === 1 && props.num === -2) {
    smallImageIndex = ArrayLength - 1;
  } else if (MainImageindex === 0 && props.num === -2) {
    smallImageIndex = ArrayLength - 2;
  } else if (MainImageindex === 0 && props.num === -1) {
    smallImageIndex = ArrayLength - 1;
  } else if (MainImageindex === ArrayLength - 2 && props.num == 2) {
    smallImageIndex = 0;
  } else if (MainImageindex === ArrayLength - 1 && props.num === 1) {
    smallImageIndex = 0;
  } else if (MainImageindex === ArrayLength - 1 && props.num === 2) {
    smallImageIndex = 1;
  } else {
    smallImageIndex = MainImageindex + props.num;
  }

  const highlightClass = props.num === 0 ? classes.highlight : "";

  return (
    <div>
      <img
        className={`${classes.smallImage} ${highlightClass}`}
        src={props.images[smallImageIndex].urls.regular}
        alt="img"
      />
    </div>
  );
};
export default ThumbnailImage;
