import React from 'react';
import './Work.sass';
import anicurapic from './Anicura3D.png';

function Work(props) {
  return (
    <section className='Work' id="Work">
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
        <ul className='container__list'>
          <li className='list__item'>
            <img className='item__pic' src={anicurapic}></img>
            <div className='item__box'>
              <h2 className='box__title'>
                <br></br>
                Anicura
                <br></br>
                3D Models
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
