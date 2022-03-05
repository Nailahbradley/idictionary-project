import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Display from "./Display";
import "./search.css";

export default function Search() {
  let [keyword, setkeyword] = useState(null);
  let [define, setdefine] = useState(null);

  function handleResponse(response) {
    setdefine(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="definition">
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
        <Display define={define} />
      </div>
    </div>
  );
}
