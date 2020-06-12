import React from "react";
import "./Profile.sass";
import pic from "./profile-pic.png";

function Profile() {
  return (
    <div className="Profile">
      <h1 className="Profile__title">
        <span>About</span>
        <span>
          me<span>.</span>
        </span>
      </h1>
      <div className="Profile__box">
        <section className="box__name">
          <h2 className="name__title">
            Jonathan
            <br></br>
            Dahnberg
          </h2>
          <p className="name__description">
            A young frontend
            <br></br>
            developer trying to
            <br></br>
            achive <span>stuff</span>.
          </p>
        </section>
        <img className="box__picture" src={pic} alt="Me sitting on a cliff"></img>
        <p className="box__text">
          <span>Hi! </span>
          <br></br>
          <br></br>
          <span>
            I'm Jonathan, 22 years old, and am a graduated Front-End developer from EC Utbildning.
          </span>
          <br></br>
          <br></br>
          <span>
            I prefer to develop web-applications in ReactJS, but I'm okay with VueJS as well. I have
            the last couple of months caught an interest in 3D-graphics which has led to a couple of
            projects in ThreeJS/Wbgl (find my projects further down in my profile). Other than that
            I've experience in building REST-API through ExpressJS, NodeJS, and working agile
            (thanks to my internships).
          </span>
          <br></br>
          <br></br>
          <span> Don't hesitate to contact me if you have any further questions.</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
