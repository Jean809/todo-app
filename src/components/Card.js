import React from "react";
import CardCSS from "./Card.module.css";

function Card() {
  return (
    <div className={`${CardCSS.container}`}>
      <h4 className={`${CardCSS.title}`}>Complete Main UI components</h4>
      <div>
        <p className={`${CardCSS.descr}`}>
          Would be good if we include every component in designing system...
        </p>
      </div>
      <div className={`${CardCSS.date}`}>6 April 2023</div>
      <input className={`${CardCSS.chkbox}`} type="checkbox"></input>
    </div>
  );
}

export default Card;
