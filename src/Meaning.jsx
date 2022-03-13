import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definintion">{definition.definition}</div>

            <small>
              <div className="example">
                <em>{definition.example}</em>
              </div>
            </small>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
