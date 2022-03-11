import React from "react";
import "./display.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Display(props) {
  if (props.define) {
    return (
      <div className="Display">
        <h2>{props.define.word}</h2>
        {props.define.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.define.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
