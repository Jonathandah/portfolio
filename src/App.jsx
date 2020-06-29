import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.sass";
import Home from "./Views/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function App() {
  const [sidebar, updateSidebar] = useState(false);

    function openSidebar(e) {
      console.log(document.querySelector(".App__sidebar").classList);
      if (!sidebar) {
        document.querySelector(".App__sidebar").style.width = "40vw"
        document.querySelector(".sidebar__content").style.width ="40vw"
        updateSidebar(true);
      } else {
        document.querySelector(".App__sidebar").style.width = "60px"
        document.querySelector(".sidebar__content").style.width ="0vw"
        updateSidebar(false);
      }
    }
  return (
    <Router>
      <div className="App">
        <header className="App__header"></header>
        <aside className="App__sidebar">
        {sidebar && <div className="sidebar__shading" />}
        <div className="sidebar__content"> </div>

       
          <div className="sidebar__box" onClick={(e) => openSidebar(e)}>
            <FontAwesomeIcon className="box__icon" icon={faAlignRight} />
            <p className="box__text">Menu</p>
          </div>
        </aside>
     
        <main className="App__main">
   
          <Route exact path="/" component={Home} />
        </main>
        <footer className="App__footer"></footer>
      </div>
    </Router>
  );
}

export default App;
