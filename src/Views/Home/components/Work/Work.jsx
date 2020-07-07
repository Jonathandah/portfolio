import React from "react";
import "./Work.sass";
import anicurapic from "./Anicura3D.png";

function Work(props) {
  return (
    <section className="Work">
      <div className="Work__container">
        <div className="container__title" id="Work">
          <h1 className="title__text">
            <span
              data-aos="slide-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              M
            </span>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="0"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              y
            </span>
            <br></br>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              w
            </span>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              o
            </span>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              r
            </span>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              k
            </span>
            <span
              data-aos="slide-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="200"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              .
            </span>
          </h1>

          <p
            className="title__text--regular"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-offset="-400"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            All my work as a frontend developer, contains a mix of projects for companies and me
            messing around.
          </p>
        </div>
        <ul className="container__list">
          <li className="list__item">
            <img
              className="item__pic"
              src={anicurapic}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            ></img>
            <div className="item__box">
              <h2 className="box__title">
                <span
                  data-aos="fade-left"
       
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                >
                  Anicura
                </span>
                <br></br>
                <span
                  data-aos="fade-left"
     
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                >
                  3D
                </span>{" "}
                <span
                  data-aos="fade-left"

                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                >
                  Models
                </span>
              </h2>
              <p
                className="box__description"
                data-aos="fade-up"
     
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit elit, pellentesque
                tortor molestie sed dui velit quis molestie. Est metus ultrices aliquam nunc. Velit
                dignissim aliquam, habitasse at. Tellus, pretium sed pulvinar nec in sed lorem
                pretium. Mattis mauris quam quam fames nulla morbi nulla id. Lacus phasellus arcu in
                amet.
                <br></br>
                <br></br>
                Semper cursus fusce mauris arcu leo velit luctus augue. Proin hendrerit morbi
                aliquam, rhoncus leo pulvinar lorem lorem nibh. Dictum id enim vitae volutpat magna
                urna. Faucibus nullam id aliquam augue. Nec consequat pulvinar tellus sed urna.
              </p>
              <a
                className="box__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://anicura-3dmodels.azurewebsites.net/"
                data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                See the project
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
