import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./search.css";

export default function Search() {
  let [keyword, setkeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
