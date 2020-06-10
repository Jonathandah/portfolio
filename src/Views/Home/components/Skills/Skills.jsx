import React from "react";
import "./Skills.sass";
import pic from "./Profile_pic.png";

function Skills() {
  return (
    <section className="Skills">
      <div className="Skills__container">
        <img className="container__picture" src={pic} alt="Me sitting on a cliff"></img>
        <div className="container__box">
          <h1 className="box__title">
            <span>About</span>
            <span>
              me<span>.</span>
            </span>
          </h1>
          <div className="box__bio">
            <section className="bio__name">
              <h2 className="name__title"></h2>
              <p className="name__description"></p>
            </section>
            <section className="bio__about">
              <p className="about__text"></p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
