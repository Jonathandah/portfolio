import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.sass';
import Home from './Views/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Mail, GitHub, Linkedin } from 'react-feather';
import ScrollReveal from 'scrollreveal';
library.add(fab);

function App() {
  let sidebar = false;
  function openMenu(e) {
    if (!sidebar) {
      document.querySelector('.App').classList.add('freeze');
      document.querySelector('.hamburger').classList.add('is-active');
      document.querySelector('.App__header').classList.add('is-open');
      document.querySelector('.header__menu').classList.add('show-menu');
      document.querySelector('.header__social').classList.add('show-social');
      sidebar = true;
    } else {
      document.querySelector('.App').classList.remove('freeze');
      document.querySelector('.hamburger').classList.remove('is-active');
      document.querySelector('.App__header').classList.remove('is-open');
      document.querySelector('.header__menu').classList.remove('show-menu');
      document.querySelector('.header__social').classList.remove('show-social');
      sidebar = false;
    }
  }

  return (
    <Router>
      <div className='App'>
        <header className='App__header'>
          <section className='header__section'>
            <div className='hamburger' id='hamburger-1' onClick={() => openMenu()}>
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </div>
          </section>

          <ul className='header__menu'>
            <li>
              <a href='#Intro' onClick={() => openMenu()}>
                Intro
              </a>
            </li>
            <li>
              <a
                href='#About'
                id='About'
                onClick={(e) => {
                  ScrollReveal().destroy();

                  openMenu();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#Skills'
                id='Skills'
                onClick={(e) => {
                  ScrollReveal().destroy();

                  openMenu();
                }}
              >
                My Skillset
              </a>
            </li>
            <li>
              <a
                href='#Work'
                id='Work'
                onClick={(e) => {
                  ScrollReveal().destroy();

                  openMenu();
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href='#Contact'
                id='Contact'
                onClick={(e) => {
                  ScrollReveal().destroy();

                  openMenu();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <section className='header__social'>
            <ul className='social__list'>
              <li className='list__item--social'>
                <a href='mailto: jonathan.dahnberg1@gmail.com'>
                  <Mail className='item__icon' />
                </a>
              </li>
              <li className='list__item--social'>
                <a
                  href='https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='item__icon' />
                </a>
              </li>
              <li className='list__item--social'>
                <a href='https://github.com/Jonathandah' target='_blank' rel='noopener noreferrer'>
                  <GitHub className='item__icon' />
                </a>
              </li>
            </ul>
          </section>
        </header>
        <main className='App__main'>
          <Route exact path='/' component={Work_in_progress} />
        </main>
        <footer className='App__footer'></footer>
      </div>
    </Router>
  );
}

export default App;
