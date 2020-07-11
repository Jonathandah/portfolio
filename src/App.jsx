import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Home from "./Views/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Mail, GitHub, Linkedin } from "react-feather";
library.add(fab);

function App() {
  let sidebar = false;
  function openMenu(e) {
    if (!sidebar) {
      // Get the current page scroll position
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };

      document.querySelector(".hamburger").classList.add("is-active");
      document.querySelector(".App__header").classList.add("is-open");
      document.querySelector(".header__menu").classList.add("show-menu");
      document.querySelector(".header__social").classList.add("show-social");
      sidebar = true;
    } else {
      window.onscroll = function () {};
      document.querySelector(".hamburger").classList.remove("is-active");
      document.querySelector(".App__header").classList.remove("is-open");
      document.querySelector(".header__menu").classList.remove("show-menu");
      document.querySelector(".header__social").classList.remove("show-social");
      sidebar = false;
    }
  }

  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <section className="header__section">
            <div className="hamburger" id="hamburger-1" onClick={() => openMenu()}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </section>

          <ul className="header__menu">
            <li>
              <a href="#Intro" onClick={() => openMenu()}>
                Intro
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={(e) => {
                  openMenu();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={(e) => {
                  openMenu();
                }}
              >
                My Skillset
              </a>
            </li>
            <li>
              <a
                href="#Work"
                onClick={(e) => {
                  openMenu();
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={(e) => {
                  openMenu();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <section className="header__social">
            <ul className="social__list">
              <li className="list__item--social">
                <a href="mailto: jonathan.dahnberg1@gmail.com">
                  <Mail className="item__icon" />
                </a>
              </li>
              <li className="list__item--social">
                <a
                  href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="item__icon" />
                </a>
              </li>
              <li className="list__item--social">
                <a href="https://github.com/Jonathandah" target="_blank" rel="noopener noreferrer">
                  <GitHub className="item__icon" />
                </a>
              </li>
            </ul>
          </section>
        </header>
        <main className="App__main">
          <Route exact path="/" component={Home} />
        </main>
        <footer className="App__footer"></footer>
      </div>
    </Router>
  );
}

export default App;
