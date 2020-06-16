import React from 'react';
import './Contact.sass';
import { Mail, GitHub, Linkedin } from 'react-feather';

function Contact(props) {
  return (
    <section className='Contact'>
      <div className='Contact__container'>
        <div className='container__media'>
          <div className='media__title'>
            <p className='title__question'>Want to know more?</p>
            <h1 className='title__text'>Get in touch with me on,</h1>
          </div>
          <ul className='media__list'>
            <li className='list__item'>
              <Mail className="item__icon"/>
              <p className='item__text'>Jonathan.dahnberg1@gmail.com</p>
            </li>
            <li className='list__item'>
              <Linkedin className="item__icon" />
              <p className='item__text'>Jonathan Dahnberg</p>
            </li>
            <li className='list__item'>
              <GitHub className="item__icon"/>
              <p className='item__text'>Jonathandah</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
