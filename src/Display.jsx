import React from "react";
import "./display.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Display(props) {
  if (props.define) {
    return (
      <div className="Display">
        <section className="wordAndPhonetics">
          <h2>{props.define.word}</h2>

          {props.define.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <div className="meaning">
          {props.define.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
