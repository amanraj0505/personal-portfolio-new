import React from "react";
import "./home.css";
import Me from "../../assets/gamer.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Aman Raj</h1>
        <span className="home__education">I am a Frontend Developer</span>
        <HeaderSocials />
        <a href="#about" className="btn">
          About me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
