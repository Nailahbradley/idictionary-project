import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Display from "./Display";
import Photos from "./Photos";
import "./search.css";

export default function Search() {
  let [keyword, setkeyword] = useState("sunset");
  let [define, setdefine] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setdefine(response.data[0]);
  }
  function handlePixelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let apiPixelkey = `563492ad6f917000010000012885f6cb704945bfa18291434b75e443`;
    let pixelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${apiPixelkey}` };

    axios.get(pixelUrl, { headers: headers }).then(handlePixelResponse);
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
          <div className="photo">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
