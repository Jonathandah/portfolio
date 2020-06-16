import React from 'react';
import './Work.sass';
import anicurapic from "./Anicura3D.png"

function Work(props) {
  return (
    <section className='Work'>
      <div className='Work__container'>
        <div className='container__title'>
          <h1 className='title__text'>
            My <br></br>work.
          </h1>

          <p className='title__text--regular'>
            All my work as a frontend developer, contains a mix of projects for companies and me
            messing around.
          </p>
        </div>
        <ul className="container__list">
            <li className="list__item" >
                <img className="item__pic" src={anicurapic}></img>
                <div className="item__box">
                    <h2 className="box__title">Anicura 3D Models</h2>
                    <p className="box__description">This is a work for anicura helping them wid jalla mannen skriava heal dagen.</p>
                    <a className="box__link" target="_blank" rel="noopener noreferrer" href="https://anicura-3dmodels.azurewebsites.net/">See the project</a>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
