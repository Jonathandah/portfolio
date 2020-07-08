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
            <img className='item__pic' src={anicurapic}></img>
            <div className='item__box'>
              <h2 className='box__title'>
                <span className='title__section--1'>Anicura</span>
                <br></br>
                <span className='title__section--2'>3D</span>{' '}
                <span className='title__section--3'>Models</span>
              </h2>
              <p className='box__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit elit, pellentesque
                tortor molestie sed dui velit quis molestie. Est metus ultrices aliquam nunc. Velit
                dignissim aliquam, habitasse at. Tellus, pretium sed pulvinar nec in sed lorem
                pretium. Mattis mauris quam quam fames nulla morbi nulla id. Lacus phasellus arcu in
                amet.
                <br></br>
                <br></br>
                Semper cursus fusce mauris arcu leo velit luctus augue. Proin hendrerit morbi
                aliquam, rhoncus leo pulvinar lorem lorem nibh. Dictum id enim vitae volutpat magna
                urna. Faucibus nullam id aliquam augue. Nec consequat pulvinar tellus sed urna.
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
