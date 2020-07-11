import React, { useEffect } from 'react';
import './Profile.sass';
import pic from './profile-pic.png';
import ScrollReveal from 'scrollreveal';

function Profile() {


  useEffect(()=>{
    ScrollReveal().reveal(".Profile__title", {delay: 200, distance: "200px", origin: "bottom", duration: 1500,  mobile: false})
    ScrollReveal().reveal(".Profile__title", {delay: 200, distance: "200px", origin: "top", duration: 1500, desktop: false})
    ScrollReveal().reveal(".name__title", {delay: 200, distance: "200px", origin: "top", duration: 1500, mobile: false})
    ScrollReveal().reveal(".name__title", {delay: 200, distance: "200px", origin: "right", duration: 1500, desktop: false })
    ScrollReveal().reveal(".box__picture", {delay: 200, distance: "200px", origin: "bottom", duration: 1500, desktop: false })
    ScrollReveal().reveal(".name__description", {delay: 200, distance: "200px", origin: "left", duration: 1500})

    let boxTextChildrens = document.querySelector(".box__text").childNodes;
    let delay = 0;
    for (let child of boxTextChildrens){
      ScrollReveal().reveal(child, {delay, distance: "200px", origin: "right", duration: 1000})
      delay += 200;
    }

  },[])


  return (
    <div className='Profile'>
      <h1 id='About' className='Profile__title'>
        <span>About</span>
        <span>
          me<span>.</span>
        </span>
      </h1>
      <div className='Profile__box'>
        <section className='box__name'>
          <h2 className='name__title'>
            Jonathan
            <br></br>
            Dahnberg
          </h2>
          <p className='name__description'>
            A young frontend
            <br></br>
            developer trying to
            <br></br>
            <span>achive</span> stuff<span>.</span>
          </p>
        </section>
        <img className='box__picture' src={pic} alt='Me sitting on a cliff'></img>
        <div className='box__text'>
          <p className="text__section--p1">Hi! </p>
          <br></br>
          <br></br>
          <p className="text__section--p2">
            I'm Jonathan, 22 years old, and am a graduated Front-End developer from EC Utbildning.
            Regular guy who enjoys to stay active, code and have a great time.
          </p>
          <br></br>
          <br></br>
          <p className="text__section--p3">
            With my knowledge in devloping high end frontend applications, where design,
            responsitivity and performance matters I'm hoping that we together can creat amazing
            things.
          </p>
          <br></br>
          <br></br>
          <p className="text__section--p4">Wanna know more? Don't hesitate to contact me!</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
