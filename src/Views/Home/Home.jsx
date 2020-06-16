import React from "react";
import "./Home.sass";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work"
// import { motion } from 'framer-motion';
// import Vivus from 'vivus';
// import { ReactComponent as Welcome } from "./svg/W.svg";

function Home() {
  return (
    <div className="Home">
      {/* <Intro /> */}
      <Skills />
      <Work/>
    </div>
  );
}

export default Home;
