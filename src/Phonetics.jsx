import React from "react";
import "./phonetics.css";
import { BsMegaphone } from "react-icons/bs";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <a
          className="button"
          href={props.phonetic.audio}
          rel="noreferrer"
          target="_blank"
        >
          <BsMegaphone />
        </a>
        <span className="phoneticText"> {props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
