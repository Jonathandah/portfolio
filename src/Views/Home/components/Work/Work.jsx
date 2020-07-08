import React, { useEffect } from 'react';
import './Work.sass';
import anicurapic from './Anicura3D.png';
import ScrollReveal from 'scrollreveal';

function Work(props) {
  useEffect(() => {
    ScrollReveal().reveal('.text__section--1', {
      delay: 200,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--2', {
      delay: 300,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--3', {
      delay: 200,
      distance: '200px',
      origin: 'left',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--4', {
      delay: 300,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--5', {
      delay: 400,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--6', {
      delay: 500,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.text__section--7', {
      delay: 600,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.title__text--regular', {
      delay: 850,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.item__pic', {
      delay: 850,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });

    ScrollReveal().reveal('.title__section--1', {
      delay: 200,
      distance: '200px',
      origin: 'right',
      duration: 1000,
    });
    ScrollReveal().reveal('.title__section--2', {
      delay: 200,
      distance: '200px',
      origin: 'right',
      duration: 1000,
    });
    ScrollReveal().reveal('.title__section--3', {
      delay: 200,
      distance: '200px',
      origin: 'right',
      duration: 1000,
    });
    ScrollReveal().reveal('.box__description', {
      delay: 200,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
    ScrollReveal().reveal('.box__link', {
      delay: 700,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
  }, []);

  return (
    <section className='Work'>
      <div className='Work__container'>
        <div className='container__title' id='Work'>
          <h1 className='title__text'>
            <span className='text__section--1'>M</span>
            <span className='text__section--2'>y</span>
            <br></br>
            <span className='text__section--3'>w</span>
            <span className='text__section--4'>o</span>
            <span className='text__section--5'>r</span>
            <span className='text__section--6'>k</span>
            <span className='text__section--7'>.</span>
          </h1>

          <p className='title__text--regular'>
            All my work as a frontend developer, contains a mix of projects for companies and me
            messing around.
          </p>
        </div>
        <ul className='container__list'>
          <li className='list__item'>
            <img className='item__pic' src={anicurapic} alt="Application showing 3D model."></img>
            <div className='item__box'>
              <h2 className='box__title'>
                <span className='title__section--1'>Anicura</span>
                <br></br>
                <span className='title__section--2'>3D</span>{' '}
                <span className='title__section--3'>Models</span>
              </h2>
              <p className='box__description'>
                This project will be a project is one made for AniCura which is a company that runs
                numerous animal clinics in Sweden. Their idea was to build a webb application that
                can help both veterinarians and customers to understand dog's and cat’s anatomies
                better. They have the vision to inspect 3D models through an application to educate
                upcoming veterinarians and help customers to understand possible surgeries,
                treatments or injuries on their pets. In this case only dogs and cats because that's
                AniCura’s primary focus. 
                <br></br>
                <br></br>
                This project is based on ThreeJS to render 3D models and I using React as framework.
                <br></br>
                <br></br>
                Note: This a demo and is still missing some functionality.
              </p>
              <a
                className='box__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://anicura-3dmodels.azurewebsites.net/'
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
