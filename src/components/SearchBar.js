import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        {/* <div className="search--icon">
          <FontAwesomeIcon icon={faSearch} />
        </div> */}
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;