import React from "react";
import "./Home.sass";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
// import { motion } from 'framer-motion';
// import Vivus from 'vivus';
// import { ReactComponent as Welcome } from "./svg/W.svg";

function Home() {
  return (
    <div className="Home">
      <Intro />
      <Skills />
    </div>
  );
}

export default Home;
