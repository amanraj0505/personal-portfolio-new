import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education & Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            let component = "";
            if (val.category === "education") {
              component = (
                <Card
                  key={id}
                  icon={val.icon}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return component;
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            let component = "";
            if (val.category === "experience") {
              component = (
                <Card
                  key={index}
                  icon={val.icon}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return component;
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
