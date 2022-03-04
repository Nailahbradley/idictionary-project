import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

import "./search.css";

export default function Search() {
  let [keyword, setkeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="search">
      <div className="wrapper">
        <form onSubmit={search}>
          <div className="search-box">
            <button>
              <BsSearch />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Search for a word"
              onChange={updateKeyword}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
