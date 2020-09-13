import React, { useState } from "react";
import classes from "../SearchBar/SearchBar.module.css";

const SearchBar = (props) => {
  const [moveUp, setMoveUp] = useState("");

  // Move search bar and button up
  const handleSearch = () => {
    setMoveUp(classes.moveUp);
    props.fetchImages();
  };

  return (
    <div className={`${classes.container} ${moveUp}`}>
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
      <button onClick={handleSearch} className={classes.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
