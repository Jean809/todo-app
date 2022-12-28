import React from "react";
import CardCSS from "./Card.module.css";

function Card() {
  return (
    <div className={CardCSS.container}>
      <h4 className={CardCSS.title}>Complete Main UI components</h4>
      <div>
        <p className={CardCSS.descr}>Hello</p>
      </div>
      <div>Due Date</div>
      <input className={CardCSS.chkbox} type="checkbox"></input>
    </div>
  );
}

export default Card;
