import React from "react";
import "./Contact.sass";
import { Mail, GitHub, Linkedin } from "react-feather";

function Contact(props) {
  return (
    <section className="Contact" id="Contact">
      <div className="Contact__container">
        <div className="container__media">
          <div className="media__title">
            <p className="title__question">Want to know more?</p>
            <h1 className="title__text">Get in touch with me on,</h1>
          </div>
          <ul className="media__list">
            <li className="list__item">
              <a href="mailto: jonathan.dahnberg1@gmail.com">
                <Mail className="item__icon" />
                <p className="item__text">Jonathan.dahnberg1@gmail.com</p>
              </a>
            </li>
            <li className="list__item">
              <a href="https://www.linkedin.com/in/jonathan-meeprong-dahnberg-5289ba174/"
              target="_blank"
              rel="noopener noreferrer">
                <Linkedin className="item__icon" />
                <p className="item__text">Jonathan Dahnberg</p>
              </a>
            </li>
            <li className="list__item">
              <a href="https://github.com/Jonathandah"
              target="_blank"
              rel="noopener noreferrer">
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
