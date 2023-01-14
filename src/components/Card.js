import React from "react";
import CardCSS from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${CardCSS.container}`}>
      <h4 className={`${CardCSS.title}`}>{props.subject}</h4>
      <div>
        <p className={`${CardCSS.descr}`}>{props.description}</p>
      </div>
      <div className={`${CardCSS.date}`}>6 April 2023</div>
      <input className={`${CardCSS.chkbox}`} type="checkbox"></input>
    </div>
  );
}

export default Card;
