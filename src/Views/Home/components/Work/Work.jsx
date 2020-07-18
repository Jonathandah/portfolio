import React, { useEffect } from "react";
import "./Work.sass";
import anicurapic from "./Anicura3D.png";
import ScrollReveal from "scrollreveal";

function Work(props) {
  useEffect(() => {
    let titleChildrens = document.querySelector(".title__text--work").childNodes;

    for (let index in titleChildrens) {

      if (index < 2) {

        ScrollReveal().reveal(titleChildrens[index], {
          delay: 0,
          distance: "200px",
          origin: "left",
          duration: 1000,
        });
      } else {
        ScrollReveal().reveal(titleChildrens[index], {
          delay: 0,
          distance: "200px",
          origin: "bottom",
          duration: 1000,
        });
      }
    }

    ScrollReveal().reveal(".title__text--regular", {
      delay: 500,
      distance: "200px",
      origin: "bottom",
      duration: 1000,
    });
    ScrollReveal().reveal(".item__pic", {
      delay: 200,
      distance: "200px",
      origin: "bottom",
      duration: 1000,
    });


    let workTitle = document.querySelector(".box__title--work").childNodes;
    for (let child of workTitle) {
      ScrollReveal().reveal(child, {
        delay: 200,
        distance: "200px",
        origin: "right",
        duration: 1000,
      });
    }

    ScrollReveal().reveal(".box__description", {
      delay: 200,
      distance: "200px",
      origin: "bottom",
      duration: 1000,
    });
    ScrollReveal().reveal(".box__link", {
      delay: 500,
      distance: "200px",
      origin: "bottom",
      duration: 1000,
      mobile: false,
    });
    ScrollReveal().reveal(".box__link", {
      delay: 500,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      desktop: false,
    });
  }, []);

  return (
    <section className="Work">
      <div className="Work__container">
        <div className="container__title" id="work">
          <h1 className="title__text--work">
            <span className="text__section--w1">M</span>
            <span className="text__section--w2">y</span>
            <br></br>
            <span className="text__section--w3">w</span>
            <span className="text__section--w4">o</span>
            <span className="text__section--w5">r</span>
            <span className="text__section--w6">k</span>
            <span className="text__section--w7">.</span>
          </h1>

          <p className="title__text--regular">
            All my work as a frontend developer, contains a mix of projects for companies and me
            messing around.
          </p>
        </div>
        <ul className="container__list">
          <li className="list__item--work">
            <img className="item__pic" src={anicurapic} alt="Application showing 3D model."></img>
            <div className="item__box">
              <h2 className="box__title--work">
                <span className="title__section--1">Anicura</span>
                <br></br>
                <span className="title__section--2">3D</span>{" "}
                <span className="title__section--3">Models</span>
              </h2>
              <p className="box__description">
                This project is one made for AniCura which is a company that runs
                numerous animal clinics in Sweden. Their idea was to build a webb application that
                can help both veterinarians and customers to understand dog's and cat’s anatomies
                better. They have the vision to inspect 3D models through an application to educate
                upcoming veterinarians and help customers to understand possible surgeries,
                treatments or injuries on their pets. In this case only dogs and cats because that's
                AniCura’s primary focus.
                <br></br>
                <br></br>
                This project is based on ThreeJS to render 3D models and is using React as framework.
                <br></br>
                <br></br>
                Note: This a demo and is still missing some functionality.
              </p>
              <a
                className="box__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://anicura-3dmodels.azurewebsites.net/"
              >
                See the project
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
