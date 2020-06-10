import React from 'react';
import "./Skills.sass"
import pic from "./Profile_pic.png"


function Skills() {
    return (
        <section className="Skills">
            <div className="Skills__container">
            <img className="container__picture" src={pic}></img>
            <div className="container__box">
                <h1 className="box__title">About me<span>.</span></h1>
                <div className="box__bio"></div>
            </div>
            </div>
   
        </section>
    )
}

export default Skills;
