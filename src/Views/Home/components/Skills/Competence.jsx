import React, { useEffect } from "react";
import "./Competence.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThreeJSLogo from "./ThreeJS-logo.svg";
import ScrollReveal from "scrollreveal";

function Competence() {
  useEffect(() => {
    ScrollReveal().reveal(".text__section--c1", {
      delay: 0,
      distance: "200px",
      origin: "left",
      duration: 1500,
    });
    ScrollReveal().reveal(".text__section--c2", {
      delay: 0,
      distance: "200px",
      origin: "left",
      duration: 1500,
    });
    ScrollReveal().reveal(".title__text--sub", {
      delay: 0,
      distance: "200px",
      origin: "left",
      duration: 1300,
    });
    ScrollReveal().reveal(".title__text--regular", {
      delay: 0,
      distance: "200px",
      origin: "bottom",
      duration: 1100,
    });
    ScrollReveal().reveal(".list__item--competence", {
      delay: 0,
      distance: "100px",
      origin: "bottom",
      duration: 1500,
    });
  }, []);

  return (
    <div className="Competence">
      <div className="Competence__title" id="skills">
        <div className="title__text">
          <p className="text__section--c1">MY</p>
          <p className="text__section--c2">SKILLSET.</p>
        </div>
        <h2 className="title__text--sub">Creating stuff with:</h2>
        <p className="title__text--regular">
          A list of my set of skills which I can provide in your projects. They should be seen as a
          description of what kind of developer I percept myself to be.
        </p>
      </div>
      <ul className="Competence__list">
        <li className="list__item--competence --left" style={{ gridArea: "1 / 1 / 3 / 9" }}>
          <FontAwesomeIcon className="item__icon--react" icon={["fab", "react"]} />
          <div className="item__box">
            <h1 className="box__title">ReactJS</h1>
            <p className="box__info">
              ReactJS is my biggest strength as a developer. It's my preferred framework to develop
              in, mainly because I think it's powerfull and versatile.
              <br></br>
              <br></br>I<span> enjoy</span> to develop in React and it's the framework I feel most
              <span> confident</span> in. Most of the projects I've done is made in React.
            </p>
          </div>
        </li>
        <li className="list__item--competence --right" style={{ gridArea: "3 / 1 / 5 / 9" }}>
          <FontAwesomeIcon className="item__icon--vue" icon={["fab", "vuejs"]} />
          <div className="item__box --rightBox">
            <h1 className="box__title">VueJS</h1>
            <p className="box__info">
              I would say that I got good basic knowledge in Vue. Even if isn't my "go to" framework
              I've the knowledge to create <span>basic</span> and <span>functional</span> projects.
              Hopfully I'll start to do more of my projects in Vue since I enjoy to use it.
            </p>
          </div>
        </li>
        <li className="list__item--competence --left" style={{ gridArea: "5 / 1 / 7 / 9" }}>
          <img className="item__icon--threejs" src={ThreeJSLogo} alt="ThreeJS logo" />
          <div className="item__box ">
            <h1 className="box__title">ThreeJS</h1>
            <p className="box__info">
              3D rendering has been very close to my heart for a while now. I <span>enjoy</span> to
              create anything from simple 3D models to a more advanced interactive 3D enviroment. To
              accomplish this I've worked a lot with the library <span>ThreeJS</span> which is based
              on <span>WebGl</span> and makes it possible to render 3D objects on web-based
              applications.
              <br></br>
              <br></br>
              Striving to learn more about 3D models and 3D rendering.
            </p>
          </div>
        </li>
        <li className="list__item--competence --right" style={{ gridArea: "7 / 1 / 9 / 9" }}>
          <FontAwesomeIcon className="item__icon--html" icon={["fab", "html5"]} />
          <div className="item__box --rightBox">
            <h1 className="box__title">HTML</h1>
            <p className="box__info">
              As a frontend developer I have all the necessery skills to create a{" "}
              <span>structured</span>, sensible and
              <span> highly</span> functional HTML.
            </p>
          </div>
        </li>
        <li className="list__item--competence --left" style={{ gridArea: "9 / 1 / 11 / 9" }}>
          <FontAwesomeIcon className="item__icon--css" icon={["fab", "css3-alt"]} />
          <div className="item__box">
            <h1 className="box__title">CSS</h1>
            <p className="box__info">
              Nautrally as a frontend developer CSS has a solid spot as one of my skills. Even
              though I'm a more logical thinking individual than I'm a creative one I've{" "}
              <span>excellent</span>
              knowledge of how to create a responsive designs, smooth transitions and good
              structured CSS. Basically all the CSS skills a frontend devloper needs.
            </p>
          </div>
        </li>
        <li className="list__item--competence --right" style={{ gridArea: "11 / 1 / 13 / 9" }}>
          <FontAwesomeIcon className="item__icon--sass" icon={["fab", "sass"]} />
          <div className="item__box --rightBox">
            <h1 className="box__title">SASS</h1>
            <p className="box__info">
              My personal <span>preference</span> to style my HTML is to style it through SASS since
              I prefer it's way of structuring selected elements.
            </p>
          </div>
        </li>
        <li className="list__item--competence --left" style={{ gridArea: "13 / 1 / 15 / 9" }}>
          <FontAwesomeIcon className="item__icon--js" icon={["fab", "js"]} />
          <div className="item__box">
            <h1 className="box__title">Javascript</h1>
            <p className="box__info">
              As I mentioned before I've always been a more logical thinking person than I've been a
              creative one. Because of that I <span>enjoy</span> to create good performing
              Javascript, create functionality and optimize with solid Javascript. I always strive
              to better my code and create a long lasting structure that is simple but
              <span>effective</span>.
            </p>
          </div>
        </li>
        <li className="list__item--competence --right" style={{ gridArea: "15 / 1 / 17 / 9" }}>
          <FontAwesomeIcon className="item__icon--docker" icon={["fab", "docker"]} />
          <div className="item__box  --rightBox">
            <h1 className="box__title">Docker</h1>
            <p className="box__info">
              Docker is one skill that I have but unfortunately not using very often. I've good
              basic knowledge of using it, to create enviroments and host apllciations in it. Would
              love to work more with Docker in the future.
            </p>
          </div>
        </li>
        <li className="list__item--competence --left" style={{ gridArea: "17 / 1 / 19 / 9" }}>
          <FontAwesomeIcon className="item__icon--nodejs" icon={["fab", "node-js"]} />
          <div className="item__box">
            <h1 className="box__title">NodeJS</h1>
            <p className="box__info">
              Durring my time as a frontend developer I've used NodeJS quite a lot. If you need
              something built in NodeJS, <span>I'm the guy</span>. I've good understanding of how to
              use it and when to use it.
              <br></br>
              <br></br>
              Hopfully that's enough ;).
            </p>
          </div>
        </li>
        <li className="list__item--competence --right" style={{ gridArea: "19 / 1 / 21 / 9" }}>
          <FontAwesomeIcon className="item__icon--wordpress" icon={["fab", "wordpress"]} />
          <div className="item__box --rightBox">
            <h1 className="box__title">Wordpress</h1>
            <p className="box__info">
              Last but no least, Wordpress. I've got all the necessery skills to create a
              <span>sustainable</span>, <span>sensible</span> and <span>sleek</span> looking
              Wordpress-based site.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Competence;
