import React, { useEffect } from "react";
import "./Contact.sass";
import { Mail, GitHub, Linkedin } from "react-feather";
import ScrollReveal from "scrollreveal";

function Contact(props) {
  useEffect(() => {
    ScrollReveal().reveal(".title__question", {
      delay: 200,
      distance: "200px",
      origin: "top",
      duration: 1000,
    });
    ScrollReveal().reveal(".title__text--contact", {
      delay: 200,
      distance: "200px",
      origin: "left",
      duration: 1000,
    });

    let list = document.querySelectorAll(".list__item--contact");
    let delay = 1000;
    for (let item of list) {
      ScrollReveal().reveal(item, {
        delay,
        distance: "200px",
        origin: "bottom",
        duration: 1000,
      });
      delay += 400;
    }
  }, []);

  return (
    <section className="Contact">
      <div className="Contact__container">
        <div className="container__media" id="contact">
          <div className="media__title">
            <p className="title__question">Want to know more?</p>
            <h1 className="title__text--contact">Get in touch with me on,</h1>
          </div>
          <ul className="media__list">
            <li className="list__item--contact">
              <a href="mailto: jonathan.dahnberg1@gmail.com">
                <Mail className="item__icon" />
                <p className="item__text">Jonathan.dahnberg1@gmail.com</p>
              </a>
            </li>
            <li className="list__item--contact">
              <a
                href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="item__icon" />
                <p className="item__text">Jonathan Dahnberg</p>
              </a>
            </li>
            <li className="list__item--contact">
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
