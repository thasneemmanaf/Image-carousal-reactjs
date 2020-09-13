import React, { useState } from "react";
import classes from "../SearchBar/SearchBar.module.css";

const SearchBar = (props) => {
  const [moveUp, setMoveUp] = useState([]);

  // Move search bar and button up
  const handleSearch = () => {
    if (props.searchValue) {
      setMoveUp([classes.moveUp, classes.searchBtnMoveUp]);
      props.fetchImages();
    }
  };

  return (
    <div className={`${classes.container} ${moveUp[0]}`}>
      <input
        type="text"
        name=""
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        onChange={props.handleOnChangeSearch}
        placeholder="Search your images here..."
      />
      <div className={classes.search}></div>
      <button
        onClick={handleSearch}
        className={`${classes.searchBtn} ${moveUp[1]}`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
