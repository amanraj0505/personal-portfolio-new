import React from "react";
import "./about.css";
import About1 from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={About1} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a computer Science and Engineering Graduate from SRM
              Institute of science and technology. I have about a year of
              experience in development/coding. I am currently working in App
              Dev team (DWS -IntelliServe) at Unisys. We use tech like React
              Native, native Android and IOS for app development. I am currently
              exploring and currently helping to bring certain EPA features to
              the app level at the ease of the user while focusing on client
              level customizations and configurations. Apps are currently live
              on Apple App Store and Google Play Store.
            </p>
            <a href="" className="btn">
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
                <h3 className="skills__names">HTML 5</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage html__skill"></div>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills__titles">
                <h3 className="skills__names">React JS</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <div className="skills_percentage reactjs"></div>
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
