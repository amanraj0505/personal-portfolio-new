import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline_date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline_text">{props.desc}</p>
    </div>
  );
};

export default Card;
