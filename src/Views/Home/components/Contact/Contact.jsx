import React, {useEffect} from "react";
import "./Contact.sass";
import { Mail, GitHub, Linkedin } from "react-feather";
import ScrollReveal from 'scrollreveal';

function Contact(props) {

  useEffect(()=>{
    ScrollReveal().reveal('.title__question', {
      delay: 200,
      distance: '200px',
      origin: 'top',
      duration: 1000,
    });
    ScrollReveal().reveal(".title__text", {
      delay: 200,
      distance: '200px',
      origin: 'left',
      duration: 1000,
    });
    
    ScrollReveal().reveal(".list__item", {
      delay: 1000,
      distance: '200px',
      origin: 'bottom',
      duration: 1000,
    });
   
  },[])

  return (
    <section className="Contact" >
      <div className="Contact__container"
            
      >
        <div className="container__media" id="Contact"
         
        >
          <div className="media__title">
            <p
              className="title__question"
        
            >
              Want to know more?
            </p>
            <h1
              className="title__text"
           
            >
              Get in touch with me on,
            </h1>
          </div>
          <ul className="media__list">
            <li
              className="list__item"
            //   data-aos="flip-up"
            //   data-aos-offset="0"
            //   data-aos-delay="1000"
            //   data-aos-duration="1000"
            //   data-aos-easing="ease-in-out"
            //   data-aos-mirror="true"
            //   data-aos-once="true"
            >
              <a href="mailto: jonathan.dahnberg1@gmail.com">
                <Mail className="item__icon" />
                <p className="item__text">Jonathan.dahnberg1@gmail.com</p>
              </a>
            </li>
            <li
              className="list__item"
              // data-aos="flip-up"
              // data-aos-offset="0"
              // data-aos-delay="1300"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="true"
        
            >
              <a
                href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="item__icon" />
                <p className="item__text">Jonathan Dahnberg</p>
              </a>
            </li>
            <li
              className="list__item"
              // data-aos="flip-up"
              // data-aos-offset="0"
              // data-aos-delay="1600"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="true"
       
            >
              <a href="https://github.com/Jonathandah" target="_blank" rel="noopener noreferrer">
                <GitHub className="item__icon" />
                <p className="item__text">Jonathandah</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
