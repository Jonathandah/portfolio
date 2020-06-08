import React from 'react';
import './Home.sass';
import { motion } from 'framer-motion';
import Vivus from 'vivus';
// import { ReactComponent as Welcome } from "./svg/W.svg";

function Home() {
  return (
    <div className='Home'>
      <section className='Home__section--welcome'>
        <div className='section__container'>
          <p className='container__text'>Welcome</p>
          <div className='container__text--dot'></div>
        </div>

        {/* <motion.div
          className="section__container"
          // animate={{ width: "50%",height:"100%", x: "-50%" }}
          // transition={{ duration: 1, delay: 4, ease: "easeOut" }}
        >
          <motion.p
            className="container__text"
            animate={{
              y: ["100%", "0%", "0%", "0%", "0%", "0%", "-100%"],
            }}
            transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          >
            Welcome
          </motion.p>
          <motion.div
            className="container__text--dot"
            animate={{
              y: ["100%", "0%", "0%"],
              // x:["0%","0%", "-100%"],
              // width:["0%", "0%","0%", "0%","0%", "0%","200%"],
              // height:["0%", "0%","0%", "0%","0%", "0%","200%"],
              // transitionEnd:{

              //   // width: ["0%","200%"],
              //   // height:["0%","20%","30%","100%","200%"],
              // },
              // // scaleX:  [0,1,100],
              // // scaleY: [0,1,100],
              // // rotate: [0, 0, 20, 20, 0],
              // borderTopRightRadius: ["50%", "50%", "0%"],
              // borderBottomRightRadius:["50%", "50%", "0%"]
            }}
            transition={{ duration: 1.5, delay: 1.25, ease: "easeOut" }}
          ></motion.div>
        </motion.div> */}
      </section>
    </div>
  );
}

export default Home;
