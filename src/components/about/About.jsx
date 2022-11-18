import React from "react";
import "./about.css";
import About1 from "../../assets/gamer.png";
import AboutBox from "./AboutBox";
import resume from "../../assets/resume_amanraj.pdf";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={About1} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Frontend Engineer and enthusiast current working in Engineeing
              team Unisys India. Proficient in Hybrid app development and web
              devempment using frameworks like React Native, React JS, HTML,
              CSS, Javascript, Android and IOS debugging, problem solving etc.
            </p>
            <a href={resume} className="btn" target={"_blank"}>
              {" "}
              Download Resume
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">React Native</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage react__native"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">JavaScript</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage javascript"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">HTML</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage html__skill"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">React JS</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage react__js"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">CSS</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage css__skill"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">GIT</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage git__skill"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">REDUX</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage redux__skill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
