import React from "react";
import "./Home.sass";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";


function Home() {

  return (
    <div className="Home">
      <Intro />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
