import React from 'react';
import './Intro.sass';

function Intro() {
  return (
    <section className='Intro' id="Intro">
      <div className='Intro__background'></div>
      <div className='Intro__container'>
        <div className='container__firstSection'>
          <div>
            <p className='firstSection__text'>Hello</p>
            <p className='firstSection__text'>
              I'm <span>Jonathan</span>,
            </p>
          </div>
        </div>
        <div className='container__secondSection'>
          <div>
            <p className='secondSection__text'>
              a <span>frontend</span> <span>developer</span>
              <span>.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
