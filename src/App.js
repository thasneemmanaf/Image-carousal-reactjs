import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Heading from "./Components/Heading/Heading";
import Loader from "./Components/Loader/Loader";
import Image from "./Components/Image/Image";
import WrapperImages from "./Components/WrapperImages/WrapperImages";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isModalActive, setModalActive] = useState(false);
  const [currentModalImage, setModalImage] = useState({ id: "", url: "" });

  useEffect(() => {}, []);

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
      `${baseUrl}/search/photos/?page=1&per_page=12&query=${query}&client_id=${clientId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setLoading(false);
        setImages([...data.results]);
      })
      .catch((error) => console.log("error"));
  };

  // To open the image modal
  const openModal = (url, id) => {
    setModalActive(true);
    setModalImage({ id: id, url: url });
  };

  // To close the modal image
  const closeModal = (event) => {
    if (event.target.id === "backdrop") {
      setModalActive(false);
    }
  };

  // To go to previous image
  const prevImage = () => {
    let index = images.findIndex((image) => image.id === currentModalImage.id);
    if (index === 0) {
      index = images.length - 1;
    } else {
      index -= 1;
    }
    setModalImage({ id: images[index].id, url: images[index].urls.regular });
  };
  // To go to next image
  const nextImage = () => {
    let index = images.findIndex((image) => image.id === currentModalImage.id);
    if (index === images.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    setModalImage({ id: images[index].id, url: images[index].urls.regular });
  };

  let modalImage = null;
  if (isModalActive) {
    modalImage = (
      <div className="backdrop" id="backdrop" onClick={closeModal}>
        <span>
          <div>
            <span className="prevBtn" onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <img className="modal" src={currentModalImage.url} alt="image" />
            <span className="nextBtn" onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
          </div>
        </span>
      </div>
    );
  }
  return (
    <div className="App">
      <Heading />
      <SearchBar
        handleOnChangeSearch={handleOnChangeSearch}
        fetchImages={fetchImages}
      />
      {isLoading ? <Loader /> : null}

      <WrapperImages>
        {images.map((image) => {
          return (
            <Image
              url={image.urls.regular}
              key={image.id}
              openModal={openModal}
              id={image.id}
            />
          );
        })}
      </WrapperImages>
      {modalImage}
    </div>
  );
}

export default App;
