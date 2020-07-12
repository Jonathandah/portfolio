import React, { useEffect } from "react";
import "./Profile.sass";
import pic from "./profile-pic.png";
import ScrollReveal from "scrollreveal";
import Rellax from "rellax";

function Profile() {
  useEffect(() => {
    ScrollReveal().reveal(".Profile__title", {
      delay: 200,
      distance: "200px",
      origin: "bottom",
      duration: 1500,
    });
    ScrollReveal().reveal(".section__title", {
      delay: 200,
      distance: "200px",
      origin: "right",
      duration: 1500,
      desktop: false,
    });
    ScrollReveal().reveal(".box__picture", {
      delay: 200,
      distance: "200px",
      origin: "bottom",
      duration: 1500,
      desktop: false,
    });


    let boxTextChildrens = document.querySelector(".section__text").childNodes;
    let delay = 0;
    for (let child of boxTextChildrens) {
      ScrollReveal().reveal(child, { delay, distance: "200px", origin: "right", duration: 1000, desktop: false });
      delay += 200;
    }

    let rellax = new Rellax(".rellax", {
      center: false,
      speed: "6"
    });
  }, []);

  return (
    <div className="Profile">
      <h1 id="about" className="Profile__title">
        <span>About</span>
        <span>
          me<span>.</span>
        </span>
      </h1>
      <div className="Profile__box">
      <img className="box__picture rellax" src={pic} alt="Me sitting on a cliff" data-rellax-speed="-1"></img>
        <section className="box__section rellax">
          <h2 className="section__name"  >
            <span >Jonathan</span>
            <span >Dahnberg</span>
          </h2>
          <div className="section__text ">
          <p className="text__section">Hi! </p>
          <br></br>
          <br></br>
          <p className="text__section">
            I'm Jonathan, 22 years old, and am a graduated Front-End developer from EC Utbildning.
            I'm a regular guy who enjoys to stay active, code and have a great time!
          </p>
          <br></br>
          <br></br>
          <p className="text__section">
            With my knowledge in developing high end frontend applications, where design,
            responsitivity and performance matters I'm hoping that we together can create amazing
            things.
          </p>
          <br></br>
          <br></br>
          <p className="text__section">Wanna know more? Don't hesitate to contact me!</p>
        </div>
        </section>
 
      
  
      </div>
    </div>
  );
}

export default Profile;
