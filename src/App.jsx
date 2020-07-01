import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Home from "./Views/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, GitHub, Linkedin } from "react-feather";

library.add(fab);

function App() {
  const [sidebar, updateSidebar] = useState(false);

  function openMenu(e) {
    if (!sidebar) {
      console.log("open");
      document.querySelector(".App").style.overflow = "hidden"
      document.querySelector(".hamburger").classList.add("is-active");
      document.querySelector(".App__header").classList.add("is-open");
      updateSidebar(true);
    } else {
      console.log("close");
      document.querySelector(".App").style.overflow = "auto"
      document.querySelector(".hamburger").classList.remove("is-active");
      document.querySelector(".App__header").classList.remove("is-open");
      updateSidebar(false);
    }
  }
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <section className="header__section">
            <div class="hamburger" id="hamburger-1" onClick={() => openMenu()}>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </section>
          {sidebar && (
            <>
              <ul className="header__menu">
                <li>
                  <a href="#Intro">Intro</a>
                </li>
                <li>
                  <a href="#Skills">My Skillset</a>
                </li>
                <li>
                  <a href="#Work">Work</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
              <section className="header__social">
                <ul className="social__list">
                  <li className="list__item">
                    <a href="mailto: jonathan.dahnberg1@gmail.com">
                      <Mail className="item__icon" />
                    </a>
                  </li>
                  <li className="list__item">
                    <a
                      href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="item__icon" />
                    </a>
                  </li>
                  <li className="list__item">
                    <a
                      href="https://github.com/Jonathandah"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub className="item__icon" />
                    </a>
                  </li>
                </ul>
              </section>
            </>
          )}
        </header>
        {/* <aside className="App__sidebar">
        {sidebar && <div className="sidebar__shading" />}
        <div className="sidebar__content"> </div>

       
          <div className="sidebar__box" onClick={(e) => openSidebar(e)}>
            <FontAwesomeIcon className="box__icon" icon={faAlignRight} />
            <p className="box__text">Menu</p>
          </div>
        </aside> */}

        <main className="App__main">
          <Route exact path="/" component={Home} />
        </main>
        <footer className="App__footer"></footer>
      </div>
    </Router>
  );
}

export default App;
