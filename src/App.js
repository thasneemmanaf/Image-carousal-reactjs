import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Heading from "./Components/Heading/Heading";
import Loader from "./Components/Loader/Loader";
import Image from "./Components/Image/Image";
import WrapperImages from "./Components/WrapperImages/WrapperImages";
import ThumbnailImage from "./Components/ThumbnailImage/ThumbnailImage";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isModalActive, setModalActive] = useState(false);
  const [currentModalImage, setModalImage] = useState({
    index: 0,
    url: "",
  });

  // Read search value from search box
  const handleOnChangeSearch = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const fetchImages = () => {
    const baseUrl = "https://api.unsplash.com";
    const clientId = "G5DVlLX5OBYa7c4fRHPrws0-YAFxYx34jEdu1bXKLBE";
    const query = searchValue;

    setLoading(true);
    fetch(
      `${baseUrl}/search/photos/?page=1&per_page=16&query=${query}&client_id=${clientId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setImages([...data.results]);
      })
      .catch((error) => console.log("error"));
  };

  // To open the image modal
  const openModal = (index, url) => {
    setModalActive(true);
    setModalImage({ index: index, url: url });
  };

  // To close the modal image
  const closeModal = (event) => {
    if (
      event.target.id === "backdrop" ||
      event.currentTarget.id === "closeBtn"
    ) {
      setModalActive(false);
    }
  };

  // To go to previous image
  const prevImage = () => {
    // let index = images.findIndex((image) => image.id === currentModalImage.id);
    let index = currentModalImage.index;
    if (index === 0) {
      index = images.length - 1;
    } else {
      index -= 1;
    }
    setModalImage({
      index: index,
      url: images[index].urls.regular,
    });
  };
  // To go to next image
  const nextImage = () => {
    // let index = images.findIndex((image) => image.id === currentModalImage.id);
    let index = currentModalImage.index;
    if (index === images.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    setModalImage({
      index: index,
      url: images[index].urls.regular,
    });
  };

  let modalImage = null;
  if (isModalActive) {
    modalImage = (
      <div className="backdrop" id="backdrop" onClick={closeModal}>
        <div className="modalContainerFixed">
          <div className="modalContainer">
            <div
              className="closeBtn noSelect"
              id="closeBtn"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>

            <span className="prevBtn noSelect" onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>

            <img className="modal" src={currentModalImage.url} alt="image" />

            <span className="nextBtn noSelect" onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
            <div className="imageSlider">
              {[-2, -1, 0, 1, 2].map((num) => {
                return (
                  <ThumbnailImage
                    images={images}
                    currentModalImage={currentModalImage}
                    num={num}
                    key={num}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Heading images={images} />
      <SearchBar
        handleOnChangeSearch={handleOnChangeSearch}
        fetchImages={fetchImages}
        searchValue={searchValue}
      />
      {isLoading ? <Loader /> : null}
      <WrapperImages>
        {images.map((image, index) => {
          return (
            <Image
              url={image.urls.regular}
              key={image.id}
              openModal={openModal}
              index={index}
            />
          );
        })}
      </WrapperImages>
      {modalImage}
    </div>
  );
}

export default App;
