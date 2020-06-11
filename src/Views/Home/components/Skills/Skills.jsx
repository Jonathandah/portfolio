import React from 'react';
import './Skills.sass';
import pic from './Profile_pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  return (
    <section className='Skills'>
      <div className='Skills__container'>
        <img className='container__picture' src={pic} alt='Me sitting on a cliff'></img>
        <div className='container__box'>
          <h1 className='box__title'>
            <span>About</span>
            <span>
              me<span>.</span>
            </span>
          </h1>
          <div className='box__bio'>
            <section className='bio__name'>
              <h2 className='name__title'>Jonathan Dahnberg</h2>
              <p className='name__description'>
                A young frontend developer trying to achive <span>stuff</span>.
              </p>
            </section>
            <section className='bio__about'>
              <p className='about__text'>
                <span>Hi! </span>
                <br></br>
                <br></br>
                <span>
                  I'm Jonathan, 22 years old, and am a graduated Front-End developer from EC
                  Utbildning.
                </span>
                <br></br>
                <br></br>
                <span>
                  I prefer to develop web-applications in ReactJS, but I'm okay with VueJS as well.
                  I have the last couple of months caught an interest in 3D-graphics which has led
                  to a couple of projects in ThreeJS/Wbgl (find my projects further down in my
                  profile). Other than that I've experience in building REST-API through ExpressJS,
                  NodeJS, and working agile (thanks to my internships).
                </span>
                <br></br>
                <br></br>
                <span> Don't hesitate to contact me if you have any further questions.</span>
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className='Skills__container--list'>
        <h1 className='container__title'>
          <span>My</span>
          <br></br>
          <span>Skillset.</span>
        </h1>
        <ul className='container__list'>
          <li className='list__item'>
            <FontAwesomeIcon className='item__icon --react' icon={['fab', 'react']} />
            <div className='item__box'>
              <h1 className='box__title'>ReactJS</h1>
              <p className='box__info'>
                ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span> it the most
                and is the framework I feel most <span>confident</span> developing in.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
