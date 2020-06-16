import React from 'react';
import './Competence.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThreeJSLogo from './ThreeJS-logo.svg';

function Competence() {
  return (
    <div className='Competence'>
      <div className='Competence__title'>
        <h1 className='title__text'>
          MY
          <br></br>
          SKILLSET.
        </h1>
        <h2 className='title__text--sub'>Lorem ipsum dolor</h2>
        <p className='title__text--regular'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit id ut posuere nibh
          cursus parturient a.
        </p>
      </div>
      <ul className='Competence__list'>
        <li className='list__item --left' style={{ gridArea: '1 / 1 / 3 / 5' }}>
          <FontAwesomeIcon className='item__icon--react' icon={['fab', 'react']} />
          <div className='item__box'>
            <h1 className='box__title'>ReactJS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --right' style={{ gridArea: '3 / 5 / 5 / 9' }}>
          <FontAwesomeIcon className='item__icon--vue' icon={['fab', 'vuejs']} />
          <div className='item__box --rightBox'>
            <h1 className='box__title'>VueJS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --left' style={{ gridArea: '5 / 1 / 7 / 5' }}>
          <img
            classname='item__icon--threejs'
            style={{ height: '180px', margin: '16px' }}
            src={ThreeJSLogo}
          />
          <div className='item__box '>
            <h1 className='box__title'>ThreeJS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --right' style={{ gridArea: '7 / 5 / 9 / 9' }}>
          <FontAwesomeIcon className='item__icon--html' icon={['fab', 'html5']} />
          <div className='item__box --rightBox'>
            <h1 className='box__title'>HTML</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --left' style={{ gridArea: '9 / 1 / 11 / 5' }}>
          <FontAwesomeIcon className='item__icon--css' icon={['fab', 'css3']} />
          <div className='item__box'>
            <h1 className='box__title'>CSS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --right' style={{ gridArea: '11 / 5 / 13 / 9' }}>
          <FontAwesomeIcon className='item__icon--sass' icon={['fab', 'sass']} />
          <div className='item__box --rightBox'>
            <h1 className='box__title'>SASS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --left' style={{ gridArea: '13 / 1 / 15 / 5' }}>
          <FontAwesomeIcon className='item__icon--js' icon={['fab', 'js']} />
          <div className='item__box'>
            <h1 className='box__title'>Javascript</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --right' style={{ gridArea: '15 / 5 / 17 / 9' }}>
          <FontAwesomeIcon className='item__icon--docker' icon={['fab', 'docker']} />
          <div className='item__box  --rightBox'>
            <h1 className='box__title'>Docker</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --left' style={{ gridArea: '17 / 1 / 19 / 5' }}>
          <FontAwesomeIcon className='item__icon--nodejs' icon={['fab', 'node-js']} />
          <div className='item__box'>
            <h1 className='box__title'>NodeJS</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
        <li className='list__item --right' style={{ gridArea: '19 / 5 / 21 / 9' }}>
          <FontAwesomeIcon className='item__icon--wordpress' icon={['fab', 'wordpress']} />
          <div className='item__box --rightBox'>
            <h1 className='box__title'>Wordpress</h1>
            <p className='box__info'>
              ReactJS is my preferred framwork to develop in for two reasons, I <span>enjoy</span>
              it the most and is the framework I feel most <span>confident</span> developing in.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Competence;
