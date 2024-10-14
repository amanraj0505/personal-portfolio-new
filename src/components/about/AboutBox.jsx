import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">4</h3>
          <span className="about_subtitle">Years Of Experience</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">10+</h3>
          <span className="about_subtitle">Projects Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">20+</h3>
          <span className="about_subtitle">POCs</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">2</h3>
          <span className="about_subtitle">Live Apps</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
