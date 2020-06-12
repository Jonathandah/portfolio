import React from "react";
import "./Competence.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Competence() {
  return (
    <div className="Competence">
      <div className="Competence__title">
        <h1 className="title__text">
          MY
          <br></br>
          SKILLSET.
        </h1>
        <h2 className="title__text--sub">Lorem ipsum dolor</h2>
        <p className="title__text--regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit id ut posuere nibh
          cursus parturient a.
        </p>
      </div>
      {/* <ul className="Competence__list">
          <li className="list__item">
            <FontAwesomeIcon className="item__icon --react" icon={["fab", "react"]} />
            <div className="item__box">
              <h1 className="box__title">ReactJS</h1>
              <p className="box__info">
                ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>{" "}
                it the most and is the framework I feel most <span>confident</span> developing in.
              </p>
            </div>
          </li>
        </ul> */}
    </div>
  );
}

export default Competence;
