import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Display from "./Display";
import "./search.css";

export default function Search() {
  let [keyword, setkeyword] = useState("universe");
  let [define, setdefine] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setdefine(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setkeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="definition">
        <div className="search">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
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
  } else {
    load();
    return "Loading";
  }
}
