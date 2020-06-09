import React from 'react';
import './Home.sass';
import Intro from './Intro';
// import { motion } from 'framer-motion';
// import Vivus from 'vivus';
// import { ReactComponent as Welcome } from "./svg/W.svg";

function Home() {
  return (
    <div className='Home'>
      <Intro />
      <Intro />
    </div>
  );
}

export default Home;
