import React, { useState,useEffect } from "react";
import "./Profile.sass";
import pic from "./profile-pic.png";
import AOS from "aos";


import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function Profile() {

  return (
    <div className="Profile">
      <h1 id="About"
      data-aos-id="About"
        className="Profile__title"
        data-aos="slide-up"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
       
      >
        <span>About</span>
        <span>
          me<span>.</span>
        </span>
      </h1>
      <div className="Profile__box">
        <section className="box__name">
          <h2
            className="name__title"
            data-aos="slide-right"
            data-aos-offset="-600"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
        
          >
            Jonathan
            <br></br>
            Dahnberg
          </h2>
          <p
            className="name__description"
            data-aos="slide-right"
            data-aos-offset="-600"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
    
          >
            A young frontend
            <br></br>
            developer trying to
            <br></br>
             <span>achive</span> stuff<span>.</span>
          </p>
        </section>
        <img className="box__picture" src={pic} alt="Me sitting on a cliff"></img>
        <div className="box__text">
          <p>Hi! </p>
          <br></br>
          <br></br>
          <p
            data-aos="slide-up"
            data-aos-offset="-600"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
   
          >
            I'm Jonathan, 22 years old, and am a graduated Front-End developer from EC Utbildning.
          </p>
          <br></br>
          <br></br>
          <p
            data-aos="slide-left"
            data-aos-offset="-600"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
       
          >
            I prefer to develop web-applications in ReactJS, but I'm okay with VueJS as well. I have
            the last couple of months caught an interest in 3D-graphics which has led to a couple of
            projects in ThreeJS/Wbgl (find my projects further down in my profile). Other than that
            I've experience in building REST-API through ExpressJS, NodeJS, and working agile
            (thanks to my internships).
          </p>
          <br></br>
          <br></br>
          <p
            data-aos="slide-up"
            data-aos-offset="-600"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {" "}
            Don't hesitate to contact me if you have any further questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
