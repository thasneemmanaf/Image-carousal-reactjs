import React from "react";
import ThumbnailImage from "../ThumbnailImage/ThumbnailImage";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ModalImage.module.css";

const ModalImage = (props) => {
  return (
    <div className={classes.backdrop} id="backdrop" onClick={props.closeModal}>
      <div className={classes.modalContainerFixed}>
        <div className={classes.modalContainer}>
          <div
            className={`${classes.closeBtn} ${classes.noSelect}`}
            id="closeBtn"
            onClick={props.closeModal}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>

          <img
            className={classes.modal}
            src={props.currentModalImage.url}
            alt="not available"
          />

          <div className={classes.sliderContainer}>
            <span
              className={`${classes.prevBtn} ${classes.noSelect}`}
              onClick={props.prevImage}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>

            <span className={classes.imageSlider}>
              {[-2, -1, 0, 1, 2].map((num) => {
                return (
                  <ThumbnailImage
                    images={props.images}
                    currentModalImage={props.currentModalImage}
                    num={num}
                    key={num}
                    openModal={props.openModal}
                  />
                );
              })}
            </span>

            <span
              className={`${classes.nextBtn} ${classes.noSelect}`}
              onClick={props.nextImage}
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
